export default function Projects() {
  const projects = [
    {
      title: "Portfolio Minimaliste",
      description:
        "Mon site personnel développé avec Next.js, TypeScript et Tailwind CSS. Intègre un système de thèmes dynamiques et des animations fluides.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      stats: { stars: 12, forks: 2 },
      year: "2024",
    },
    {
      title: "Outil d'Audit BDD",
      description:
        "Application interne pour l'analyse de performance des bases de données PostgreSQL. Visualisation des goulots d'étranglement et suggestions d'indexation.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "React"],
      stats: { stars: 45, forks: 8 },
      year: "2024",
    },
    {
      title: "Gestionnaire de Tâches Distribué",
      description:
        "Projet universitaire implémentant un système de file d'attente distribué avec tolérance aux pannes.",
      technologies: ["Golang", "Docker", "Redis"],
      stats: { stars: 28, forks: 5 },
      year: "2023",
    },
    {
      title: "E-Commerce Microservices",
      description:
        "Plateforme de vente en ligne construite sur une architecture microservices. Gestion du catalogue, paniers et paiements.",
      technologies: ["Node.js", "Express", "MongoDB", "RabbitMQ"],
      stats: { stars: 34, forks: 9 },
      year: "2023",
    },
  ];

  return (
    <div className="pb-16">
      <h1 className="text-xl font-medium uppercase tracking-widest mb-12 opacity-50">
        Projets GitHub
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group border border-(--nav-border) bg-(--nav-bg) p-6 rounded-lg hover:border-(--foreground) transition-colors duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold font-mono group-hover:underline underline-offset-4 decoration-2 text-(--foreground)">
                  {project.title}
                </h2>
                <span className="text-xs font-mono border border-(--nav-border) px-2 py-1 rounded opacity-70">
                  Public
                </span>
              </div>

              <p className="text-(--foreground)/80 text-sm mb-6 leading-relaxed font-mono">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-1 rounded bg-(--foreground)/10 text-(--foreground)"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs font-mono opacity-60">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-(--foreground)"></span>
                  {project.technologies[0]}
                </div>
                <div className="flex items-center gap-1">
                  ★ {project.stats.stars}
                </div>
                <div className="flex items-center gap-1">
                  ⑂ {project.stats.forks}
                </div>
                <div className="ml-auto">{project.year}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
