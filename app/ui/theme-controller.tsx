"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { cinzel, bitcountPropSingle } from "@/app/ui/font";

export function ThemeController() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const isCoderThemeTarget = pathname === "/projects";
    const body = document.body;
    const html = document.documentElement;

    const applyTheme = () => {
      if (isCoderThemeTarget) {
        html.setAttribute("data-theme", "coder");
        body.classList.remove(cinzel.className);
        body.classList.add(bitcountPropSingle.className);
      } else {
        html.removeAttribute("data-theme");
        body.classList.add(cinzel.className);
        body.classList.remove(bitcountPropSingle.className);
      }
    };

    applyTheme();
    prevPathname.current = pathname;
  }, [pathname]);

  return null;
}
