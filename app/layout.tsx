import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/layout/ClientShell";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable} antialiased`}
      >
        <div className="fixed inset-0 aurora-bg pointer-events-none -z-10" />
        <div className="fixed inset-0 noise-overlay pointer-events-none -z-10 opacity-60" />
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
