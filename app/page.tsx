import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 min-h-[60vh]">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-800">
          Simon Husser
        </h1>
        <p className="text-lg leading-relaxed text-neutral-700 max-w-xl mx-auto md:mx-0">
          Bonjour, je suis un développeur passionné par la <strong>data</strong>{" "}
          et le <strong>développement full-stack</strong>.
        </p>
        <p className="text-lg leading-relaxed text-neutral-700 max-w-xl mx-auto md:mx-0">
          Diplômé d&apos;un <strong>BUT Informatique</strong>, j&apos;ai affiné
          mes compétences lors d&apos;une alternance au sein d&apos;un{" "}
          <strong>cabinet d&apos;expertise en bases de données</strong>.
          J&apos;aime construire des solutions performantes et épurées.
        </p>
        <div className="pt-6 flex gap-4 justify-center md:justify-start">
          <Link
            href="/projects"
            className="px-6 py-2 bg-[#333333] text-[#dedcb9] rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Voir mes projets
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 border border-[#333333] text-[#333333] rounded-full font-medium hover:bg-[#333333]/10 transition-colors"
          >
            Me contacter
          </Link>
        </div>
      </div>

      <div className="relative w-48 h-48 md:w-72 md:h-72 shrink-0">
        <Image
          src="/simon-cv-photo.jpg"
          alt="Portrait de Simon Husser"
          fill
          className="object-cover rounded-2xl shadow-md rotate-3"
          priority
        />
      </div>
    </div>
  );
}
