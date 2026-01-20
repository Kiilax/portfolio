export default function About() {
  return (
    <div className="pt-20 pb-16">
      <h1 className="text-xl font-medium uppercase tracking-widest mb-12 opacity-50">
        À propos de moi
      </h1>
      
      <div className="space-y-12 max-w-3xl">
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-xl font-light text-neutral-800 leading-relaxed">
            Passionné par le développement informatique, je cherche constamment à approfondir mes connaissances techniques pour concevoir des applications robustes et intuitives.
          </p>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-neutral-800 border-b border-neutral-300 pb-2">
            Formation
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-medium text-neutral-900">BUT Informatique</h3>
                <span className="text-sm text-neutral-500 font-mono">2021 - 2024</span>
              </div>
              <p className="text-neutral-700">
                Formation universitaire technologique axée sur le développement logiciel, les bases de données et la gestion de projet.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-neutral-800 border-b border-neutral-300 pb-2">
            Expérience Professionnelle
          </h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-medium text-neutral-900">Développeur Alternant</h3>
                <span className="text-sm text-neutral-500 font-mono">2023 - 2024</span>
              </div>
              <div className="text-neutral-600 mb-2 italic">Cabinet d'Expertise en Bases de Données</div>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-2">
                <li>Développement et maintenance d'outils internes pour l'audit de bases de données.</li>
                <li>Optimisation de requêtes SQL complexes et analyse de performance.</li>
                <li>Collaboration au sein d'une équipe agile pour délivrer des solutions critiques.</li>
              </ul>
            </div>
            
             <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-medium text-neutral-900">Stage Développeur</h3>
                <span className="text-sm text-neutral-500 font-mono">2023</span>
              </div>
              <p className="text-neutral-700">
                Participation au développement de fonctionnalités full-stack et découverte des problématiques de production.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
