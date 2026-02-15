import { getRepos } from "@/app/lib/github";
import { ParticlesBackground } from "@/app/ui/bg-animations";

export default async function Projects() {
  const repos = await getRepos();

  return (
    <div className="pb-16 relative">
      <ParticlesBackground />
      <h1 className="text-5xl font-medium uppercase tracking-widest mb-12 relative z-10">
        Projets GitHub
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-(--nav-border) bg-(--nav-bg) p-6 rounded-lg hover:border-(--foreground) transition-colors duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold font-mono group-hover:underline underline-offset-4 decoration-2 text-(--foreground)">
                  {repo.name}
                </h2>
                <span className="text-xs font-mono border border-(--nav-border) px-2 py-1 rounded opacity-70">
                  Public
                </span>
              </div>

              <p className="text-(--foreground)/80 text-sm mb-6 leading-relaxed font-mono line-clamp-3">
                {repo.description || "Aucune description disponible."}
              </p>

              {repo.latest_commit_message && (
                <p className="text-xs font-mono text-(--foreground)/50 mb-4 truncate italic">
                  ↳ {repo.latest_commit_message}
                </p>
              )}
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.languages && repo.languages.length > 0 ? (
                  repo.languages.map((lang) => (
                    <span
                      key={lang}
                      className="text-xs font-mono px-2 py-1 rounded bg-(--foreground)/10 text-(--foreground)"
                    >
                      {lang}
                    </span>
                  ))
                ) : (
                  <span className="text-xs font-mono px-2 py-1 rounded bg-(--foreground)/5 text-(--foreground) opacity-50 italic">
                    Unknown
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 text-xs font-mono opacity-60">
                <div className="ml-auto">
                  {new Date(repo.updated_at).getFullYear()}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
