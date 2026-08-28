import { Inter } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/layout/ClientShell";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
