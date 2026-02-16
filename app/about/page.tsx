import { inter } from "@/app/ui/font";
import Image from "next/image";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { DotsBackground } from "@/app/ui/bg-animations";

export default function About() {
  return (
    <div className={`pb-16 ${inter.className} relative`}>
      <DotsBackground />
      {/* Header Section */}
      <div className="max-w-5xl mb-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
        <div>
          <h1 className="text-5xl font-medium uppercase tracking-widest mb-8 text-neutral-500">
            À propos de moi
          </h1>
          <p className="text-2xl font-medium text-neutral-900 leading-relaxed text-balance">
            Étudiant en 3ème année de BUT Informatique, j’aime développer des
            applications full-stack et je m’intéresse particulièrement à la
            conception d’outils fiables et ergonomiques.
            <br />
            <span className="text-neutral-500 text-lg mt-4 block font-normal">
              Je recherche une école d’ingénieur en apprentissage afin de
              consolider mes compétences en ingénierie logicielle.
            </span>
          </p>
          <div className="mt-8">
            <a
              href="/cv-simon.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              Mon CV
            </a>
          </div>
        </div>

        <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 mx-auto md:mx-0 order-first md:order-last">
          <Image
            src="/simon-picture.png"
            alt="Portrait de Simon Husser"
            height={400}
            width={400}
            className="object-cover rounded-2xl shadow-lg rotate-3"
            priority
          />
        </div>
      </div>

      <section className="mb-24">
        <h2 className="text-xl font-medium uppercase tracking-widest mb-8 text-neutral-500">
          Compétences Techniques
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[rgb(152,38,244)] mb-6">
              Langages
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Java", "C#", "C", "Python", "TypeScript", "SQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white border border-neutral-200 rounded-md text-sm font-medium text-neutral-700"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[rgb(152,38,244)] mb-6">
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Spring Boot",
                "NestJS",
                "Node.js",
                "Express",
                "Prisma",
                "Hibernate",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white border border-neutral-200 rounded-md text-sm font-medium text-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[rgb(152,38,244)] mb-6">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Angular",
                "React",
                "React Native",
                "React Router",
                "Next.js",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white border border-neutral-200 rounded-md text-sm font-medium text-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[rgb(152,38,244)] mb-6">
              Outils & DevOps
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Docker", "Git", "GitLab CI/CD", "Figma", "Notion"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white border border-neutral-200 rounded-md text-sm font-medium text-neutral-700"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Column */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100">
            <AcademicCapIcon className="w-6 h-6 text-[rgb(152,38,244)]" />
            <h2 className="text-xl font-bold text-neutral-900">Formations</h2>
          </div>

          <div className="space-y-6">
            {/* Card 1 */}
            <div className="group bg-neutral-50 rounded-2xl p-6 border border-neutral-100 hover:border-[rgb(152,38,244)]/30 hover:shadow-sm transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-neutral-900 text-lg">
                    BUT Informatique
                  </h3>
                  <div className="text-[rgb(152,38,244)] font-medium text-sm mt-1">
                    Réalisation d&apos;applications
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1 px-3 py-1 bg-white text-xs font-mono text-neutral-500 rounded-full border border-neutral-100">
                  <CalendarIcon className="w-3 h-3" />
                  2023 - 2026
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-neutral-600 mb-4">
                <MapPinIcon className="w-4 h-4" />
                IUT Robert Schuman, Illkirch
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed">
                Développement d&apos;applications web et mobiles (NestJS,
                Angular, React Native), automatisation CI/CD (Docker, Gitlab),
                et architecture logicielle (MVC, patrons de conception).
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-neutral-50 rounded-2xl p-6 border border-neutral-100 hover:border-[rgb(152,38,244)]/30 hover:shadow-sm transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-neutral-900 text-lg">
                    DUT Carrières Sociales
                  </h3>
                  <div className="text-[rgb(152,38,244)] font-medium text-sm mt-1">
                    Animation sociale
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1 px-3 py-1 bg-white text-xs font-mono text-neutral-500 rounded-full border border-neutral-100">
                  <CalendarIcon className="w-3 h-3" />
                  2020 - 2022
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-neutral-600 mb-4">
                <MapPinIcon className="w-4 h-4" />
                IUT Nord Franche-Comté, Belfort
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed">
                Acquisition de compétences en communication, gestion de projet,
                et dynamique de groupe.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Column */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100">
            <BriefcaseIcon className="w-6 h-6 text-[rgb(152,38,244)]" />
            <h2 className="text-xl font-bold text-neutral-900">Expériences</h2>
          </div>

          <div className="space-y-6">
            {/* Card 1 */}
            <div className="group bg-neutral-50 rounded-2xl p-6 border border-neutral-100 hover:border-[rgb(152,38,244)]/30 hover:shadow-sm transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-neutral-900 text-lg">
                    Développeur Full Stack
                  </h3>
                  <div className="text-[rgb(152,38,244)] font-medium text-sm mt-1">
                    Zen-Conseil (Alternance)
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1 px-3 py-1 bg-white text-xs font-mono text-neutral-500 rounded-full border border-neutral-100">
                  <CalendarIcon className="w-3 h-3" />
                  2025 - 2026
                </div>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                Conception et mise en production d&apos;outils internes du SI.
              </p>
              <ul className="text-sm text-neutral-500 space-y-2 list-disc list-inside marker:text-[rgb(152,38,244)]">
                <li>Stack : Java Spring Boot, Angular, API REST</li>
                <li>Tableaux de bord Grafana</li>
                <li> Stratégies de sauvegarde BDD</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="group bg-neutral-50 rounded-2xl p-6 border border-neutral-100 hover:border-[rgb(152,38,244)]/30 hover:shadow-sm transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-neutral-900 text-lg">
                    Auxiliaire de vie sociale
                  </h3>
                  <div className="text-[rgb(152,38,244)] font-medium text-sm mt-1">
                    Au Bien Vieillir (CDI)
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1 px-3 py-1 bg-white text-xs font-mono text-neutral-500 rounded-full border border-neutral-100">
                  <CalendarIcon className="w-3 h-3" />
                  2022 - 2023
                </div>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed">
                Accompagnement de personnes dépendantes. Développement de la
                rigueur, de la gestion d&apos;équipe et des compétences
                relationnelles.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
