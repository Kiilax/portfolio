"use client";

import {
  UserIcon,
  CommandLineIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "/about", label: "Ma présentation", icon: UserIcon },
  { href: "/projects", label: "Mes projets", icon: CommandLineIcon },
];

export function NavBar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  if (pathname === "/") {
    return null;
  }

  return (
    <nav className="relative w-full flex items-center justify-center">
      <Link
        href="/"
        className="absolute left-0 h-12 w-12 flex items-center justify-center bg-(--nav-bg)/90 border border-(--nav-border) rounded-full shadow-sm text-(--nav-text) hover:text-(--nav-text-active) pointer-events-auto backdrop-blur-sm transition-all duration-200 hover:scale-110"
        aria-label="Retour à l'accueil"
      >
        <ArrowLeftIcon className="w-5 h-5" />
      </Link>

      <ul
        key={pathname}
        className="flex w-fit mx-auto flex-row gap-8 px-8 text-md font-medium uppercase tracking-wide opacity-90 backdrop-blur-sm justify-center rounded-full py-2 shadow-sm border pointer-events-auto transition-colors duration-500"
        style={{
          backgroundColor: "var(--nav-bg)",
          borderColor: "var(--nav-border)",
        }}
        onMouseLeave={() => setHoveredPath(null)}
      >
        {links.map((link) => {
          const LinkIcon = link.icon;
          const isActive = pathname === link.href;

          return (
            <li
              key={link.href}
              className="relative "
              onMouseEnter={() => setHoveredPath(link.href)}
            >
              <Link
                href={link.href}
                className={clsx(
                  "flex items-center justify-center gap-2 py-2 px-4 relative z-10 transition-colors duration-200",
                  isActive ? "cursor-default" : "cursor-pointer",
                )}
              >
                {isActive && (
                  <div
                    className="absolute inset-0 rounded-full z-0 shadow-sm"
                    style={{ backgroundColor: "var(--nav-pill-active)" }}
                  />
                )}

                {hoveredPath === link.href && !isActive && (
                  <motion.div
                    layoutId={`${pathname}-hover-pill`}
                    className="absolute inset-0 rounded-full z-0"
                    style={{ backgroundColor: "var(--nav-pill-hover)" }}
                    transition={{
                      type: "spring",
                      bounce: 0.15,
                      duration: 0.5,
                    }}
                  />
                )}

                <LinkIcon
                  className={clsx(
                    "w-5 h-5 relative z-10 transition-colors duration-200",
                  )}
                  style={{
                    color: isActive
                      ? "var(--nav-text-active)"
                      : "var(--nav-text)",
                  }}
                />
                <p
                  className={clsx(
                    "hidden md:block font-medium tracking-wide text-sm pt-0.5 relative z-10 transition-colors duration-200",
                  )}
                  style={{
                    color: isActive
                      ? "var(--nav-text-active)"
                      : "var(--nav-text)",
                  }}
                >
                  {link.label}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
