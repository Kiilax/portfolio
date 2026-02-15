"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CircuitBackground } from "@/app/ui/bg-animations";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[75vh] max-w-6xl mx-auto px-4 md:px-0 relative">
      <CircuitBackground />
      <div className="flex-1 space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold tracking-tight"
        >
          <motion.span
            animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% auto" }}
            className="text-transparent bg-clip-text bg-linear-to-r from-[rgb(152,38,244)] via-violet-500 to-[rgb(152,38,244)] inline-block pb-2"
          >
            Moi, c&apos;est <br />
            Simon
          </motion.span>
        </motion.h1>

        <div className="space-y-6">
          <p className="text-2xl md:text-4xl leading-relaxed text-neutral-800 font-medium">
            Je suis{" "}
            <span className="text-neutral-900 font-bold">
              étudiant en informatique
            </span>
            .
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-neutral-600 max-w-2xl">
            Passionné par la tech, j&apos;aime développer des applications qui
            vont à l&apos;essentiel : fluides, performantes et simples à
            utiliser.
          </p>
        </div>
      </div>

      <div className="shrink-0 mt-8 md:mt-0">
        <Link
          href="/about"
          className="group flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-[rgb(152,38,244)] text-white rounded-full shadow-lg shadow-[rgb(152,38,244)]/20 hover:scale-110 transition-transform duration-300 ring-4 ring-transparent hover:ring-[rgb(152,38,244)]/10"
          aria-label="En savoir plus"
        >
          <ArrowRightIcon className="w-10 h-10 md:w-12 md:h-12 group-hover:translate transition-transform" />
        </Link>
      </div>
    </div>
  );
}
