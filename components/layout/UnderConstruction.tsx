import dynamic from "next/dynamic";

const ConstructionModel = dynamic(() => import("./ConstructionModel"), {
  ssr: false,
  loading: () => <div className="w-full h-[min(52vh,440px)]" aria-hidden />,
});

export default function UnderConstruction() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-6 pb-16">
      <div className="w-full max-w-xl h-[min(52vh,440px)]">
        <ConstructionModel />
      </div>
      <div className="max-w-md text-center mt-2">
        <p className="text-sm text-[var(--muted)] mb-3">Animioui</p>
        <h1 className="display-lg mb-4">Under construction</h1>
        <p className="body-lg mx-auto">The site is being rebuilt. Drag the model to look around.</p>
      </div>
    </div>
  );
}
