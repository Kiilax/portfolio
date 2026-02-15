"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { inter, bitcountPropSingle } from "@/app/ui/font";

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
        body.classList.remove(inter.className);
        body.classList.add(bitcountPropSingle.className);
      } else {
        html.removeAttribute("data-theme");
        body.classList.add(inter.className);
        body.classList.remove(bitcountPropSingle.className);
      }
    };

    applyTheme();
    prevPathname.current = pathname;
  }, [pathname]);

  return null;
}
