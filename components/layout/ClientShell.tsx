"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { usePathname } from "next/navigation";

export default function ClientShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isDocsPage = pathname?.startsWith("/docs");

  return (
    <>
      <Navbar />
      <main className={`min-h-screen ${isDocsPage ? "pt-0" : "pt-28"}`}>
        {children}
      </main>
      {!isDocsPage && <Footer />}
    </>
  );
}
