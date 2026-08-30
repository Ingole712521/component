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
  const isDocs = pathname?.startsWith("/docs");

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">{children}</main>
      {!isDocs && <Footer />}
    </>
  );
}
