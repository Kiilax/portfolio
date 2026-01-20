import type { Metadata } from "next";
import { cinzel } from "@/app/ui/font";
import "./globals.css";
import { NavBar } from "@/app/ui/navbar";

import { ThemeController } from "@/app/ui/theme-controller";

export const metadata: Metadata = {
  title: "Simon",
  description: "A minimalist portfolio created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.className} antialiased min-h-screen flex flex-col max-w-4xl mx-auto px-6 py-12`}
      >
        <ThemeController />
        <header className="mb-16 sticky top-6 z-50 pointer-events-none">
          <NavBar />
        </header>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
