"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";

function LenisRouteSync() {
  const pathname = usePathname();
  const lenis = useLenis();
  const isFirstPath = useRef(true);

  useEffect(() => {
    if (!lenis) return;
    if (isFirstPath.current) {
      isFirstPath.current = false;
      return;
    }
    lenis.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        anchors: true,
        autoRaf: true,
        allowNestedScroll: true,
        stopInertiaOnNavigate: true,
        respectReducedMotion: true,
      }}
    >
      <LenisRouteSync />
      {children}
    </ReactLenis>
  );
}

export function useLenisLock(locked: boolean) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    if (locked) lenis.stop();
    else lenis.start();
  }, [lenis, locked]);
}
