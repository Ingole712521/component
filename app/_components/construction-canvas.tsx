"use client";

import dynamic from "next/dynamic";

const ConstructionModel = dynamic(() => import("./construction-model"), {
  ssr: false,
  loading: () => <div className="w-full h-[min(52vh,440px)]" aria-hidden />,
});

export function ConstructionCanvas() {
  return <ConstructionModel />;
}
