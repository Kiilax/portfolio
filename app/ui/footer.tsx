"use client";

import { usePathname } from "next/navigation";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="mt-12 py-8 border-t border-(--foreground)/10 border-dashed transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-(--foreground)/60 transition-colors duration-300">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-4 h-4" />
            <span>Strasbourg, France</span>
          </div>

          <a
            href="mailto:hussersimo@gmail.com"
            className="flex items-center gap-2 hover:text-(--foreground) transition-colors"
          >
            <EnvelopeIcon className="w-4 h-4" />
            <span>hussersimo@gmail.com</span>
          </a>
        </div>

        <div className="flex gap-6 font-medium">
          <a
            href="https://github.com/Kiilax"
            className="hover:text-(--foreground) transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/simon-husser-6385b823b/"
            className="hover:text-(--foreground) transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
