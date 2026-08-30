"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
import { usePathname } from "next/navigation";

function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden>
      <div className="ambient-orb ambient-orb-violet w-[520px] h-[520px] -top-32 -left-32" />
      <div className="ambient-orb ambient-orb-cyan w-[480px] h-[480px] top-1/3 -right-40" />
      <div className="ambient-orb ambient-orb-violet w-[400px] h-[400px] bottom-0 left-1/3 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_50%)]" />
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
