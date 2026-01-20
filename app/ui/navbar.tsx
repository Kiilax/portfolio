"use client";

import {
  UserIcon,
  HomeIcon,
  EnvelopeIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/projects", label: "Projects", icon: CommandLineIcon },
  { href: "/about", label: "About", icon: UserIcon },
  { href: "/contact", label: "Contact", icon: EnvelopeIcon },
];

export function NavBar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <nav>
      <ul
        key={pathname}
        className="flex flex-row gap-8 sm:gap-20 text-md font-medium uppercase tracking-wide opacity-90 backdrop-blur-sm justify-center rounded-full py-3 shadow-sm border pointer-events-auto transition-colors duration-500"
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
                    "hidden md:block font-medium uppercase tracking-wide text-sm pt-0.5 relative z-10 transition-colors duration-200",
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
