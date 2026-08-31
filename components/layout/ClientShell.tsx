"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
import { usePathname } from "next/navigation";

function AppChrome({
  children,
  showFooter,
  isDocs,
}: Readonly<{
  children: React.ReactNode;
  showFooter: boolean;
  isDocs: boolean;
}>) {
  return (
    <>
      <Navbar />
      <main id="main-content" className={isDocs ? "relative pt-16" : "relative pt-24"}>
        {children}
      </main>
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
  const isDocs = pathname?.startsWith("/docs") ?? false;

  if (isDocs) {
    return (
      <AppChrome showFooter isDocs>
        {children}
      </AppChrome>
    );
  }

  return (
    <LenisProvider>
      <AppChrome showFooter isDocs={false}>
        {children}
      </AppChrome>
    </LenisProvider>
  );
}
