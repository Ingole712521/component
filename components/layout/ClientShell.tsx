"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
import { usePathname } from "next/navigation";

function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden>
      <div className="ambient-glow w-[600px] h-[600px] -top-40 -right-32 opacity-50" />
      <div className="ambient-glow w-[400px] h-[400px] bottom-0 left-1/4 opacity-30" />
    </div>
  );
}

function AppChrome({
  children,
  showFooter,
}: Readonly<{
  children: React.ReactNode;
  showFooter: boolean;
}>) {
  return (
    <>
      <div className="grain-overlay" aria-hidden />
      <AmbientBackground />
      <Navbar />
      <main className="relative pt-16">{children}</main>
      {showFooter && <Footer />}
    </>
  );
}

export default function ClientShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isDocs = pathname?.startsWith("/docs");

  if (isDocs) {
    return <AppChrome showFooter={false}>{children}</AppChrome>;
  }

  return (
    <LenisProvider>
      <AppChrome showFooter>{children}</AppChrome>
    </LenisProvider>
  );
}
