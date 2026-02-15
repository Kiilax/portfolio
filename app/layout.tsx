import type { Metadata } from "next";
import { inter } from "@/app/ui/font";
import "./globals.css";
import { NavBar } from "@/app/ui/navbar";
import { Footer } from "@/app/ui/footer";

import { ThemeController } from "@/app/ui/theme-controller";

export const metadata: Metadata = {
  title: "Simon Husser",
  description: "Site web de Simon Husser, développeur informatique",
  icons: {
    icon: "/s-md.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col max-w-4xl mx-auto px-6 py-12`}
      >
        <div className="fixed inset-0 -z-50 bg-(--background) transition-colors duration-300" />
        <ThemeController />
        <header className="mb-16 sticky top-6 z-50 pointer-events-none">
          <NavBar />
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
