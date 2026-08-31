import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/layout/ClientShell";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans-face",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-face",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Animioui",
    template: "%s | Animioui",
  },
  description: "Animioui is under construction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${jetbrains.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
