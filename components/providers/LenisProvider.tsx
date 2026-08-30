"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

function LenisRouteSync() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    lenis.scrollTo(0, { immediate: true, force: true });
    lenis.resize();

    const frame = requestAnimationFrame(() => {
      lenis.scrollTo(0, { immediate: true, force: true });
      lenis.resize();
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, lenis]);

  return null;
}

type LenisProviderProps = {
  children: ReactNode;
};

export default function LenisProvider({ children }: LenisProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.085,
        duration: 1.15,
        smoothWheel: true,
        touchMultiplier: 1.2,
        autoRaf: true,
        stopInertiaOnNavigate: true,
      }}
    >
      <LenisRouteSync />
      {children}
    </ReactLenis>
  );
}
