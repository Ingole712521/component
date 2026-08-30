import { Inter, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/layout/ClientShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
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
    <html lang="en">
      <body className={`${inter.variable} ${syne.variable} ${jetbrains.variable}`}>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
