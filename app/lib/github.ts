export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  languages: string[];
  private: boolean;
  fork: boolean;
  updated_at: string;
  latest_commit_message?: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  private: boolean;
  fork: boolean;
  updated_at: string;
}

export async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/Kiilax/repos?sort=updated&per_page=100",
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const repos: GitHubRepo[] = await res.json();
    const publicRepos = repos
      .filter((repo) => !repo.fork && !repo.private)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);

    const reposWithExtras = await Promise.all(
      publicRepos.map(async (repo) => {
        let latest_commit_message = undefined;
        let languages: string[] = repo.language ? [repo.language] : [];

        try {
          const [commitsRes, languagesRes] = await Promise.all([
            fetch(
              `https://api.github.com/repos/Kiilax/${repo.name}/commits?per_page=1`,
              {
                headers: {
                  Authorization: `token ${process.env.GITHUB_TOKEN}`,
                },
                next: { revalidate: 3600 },
              },
            ),
            fetch(
              `https://api.github.com/repos/Kiilax/${repo.name}/languages`,
              {
                headers: {
                  Authorization: `token ${process.env.GITHUB_TOKEN}`,
                },
                next: { revalidate: 3600 },
              },
            ),
          ]);

          if (commitsRes.ok) {
            const commits = await commitsRes.json();
            if (commits.length > 0 && commits[0]?.commit?.message) {
              latest_commit_message = commits[0].commit.message;
            }
          }

          if (languagesRes.ok) {
            const langs = await languagesRes.json();
            const fetchedLanguages = Object.keys(langs);
            if (fetchedLanguages.length > 0) {
              languages = fetchedLanguages;
            }
          }
        } catch (error) {
          console.warn(`Could not fetch details for ${repo.name}`, error);
        }

        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          private: repo.private,
          fork: repo.fork,
          updated_at: repo.updated_at,
          languages,
          latest_commit_message,
        } as Repo;
      }),
    );

    return reposWithExtras;
  } catch (error) {
    console.error("Error fetching repos:", error);
    return [];
  }
}
