import Link from "next/link";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-24 sm:py-28 bg-linear-to-b from-black via-zinc-950 to-black"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-accent/20 via-transparent to-transparent blur-3xl opacity-40" />
        <div className="absolute -left-40 top-40 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Simple pricing for every{" "}
            <span className="bg-linear-to-r from-accent to-emerald-400 bg-clip-text text-transparent">
              project
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Choose a plan that fits your workflow. No hidden fees, cancel
            anytime.
          </p>
        </div>

        {/* Live preview link */}
        <div className="mt-10 flex justify-center">
          <Link
            href="https://pricing-component-one-ivory.vercel.app/"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent hover:bg-accent/20 hover:border-accent transition-colors"
          >
            View full live preview
            <span aria-hidden className="text-xs">
              ↗
            </span>
          </Link>
        </div>

        {/* Embedded live preview */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-xl shadow-[0_0_80px_rgba(56,189,248,0.25)] overflow-hidden">
          <div className="border-b border-white/5 px-4 sm:px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <p className="text-[11px] sm:text-xs text-zinc-500 truncate">
              pricing-component-one-ivory.vercel.app
            </p>
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              Live Preview
            </div>
          </div>
          <div className="aspect-video bg-black">
            <iframe
              src="https://pricing-component-one-ivory.vercel.app/"
              title="Pricing component live preview"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* Inline simplified pricing cards preview */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {/* Starter */}
          <div className="relative rounded-2xl border border-white/10 bg-zinc-950/80 p-6 flex flex-col">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Starter
            </div>
            <div className="mb-4 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-white">$9</span>
              <span className="text-sm text-zinc-500">/month</span>
            </div>
            <p className="mb-6 text-sm text-zinc-400">
              Perfect for trying things out or small personal projects.
            </p>
            <ul className="space-y-2 text-sm text-zinc-300 mb-8 flex-1">
              <li>· 3 active projects</li>
              <li>· Basic components</li>
              <li>· Community support</li>
            </ul>
            <button className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition">
              Get Starter
            </button>
          </div>

          {/* Pro */}
          <div className="relative rounded-2xl border border-accent/60 bg-linear-to-b from-accent/20 via-zinc-950 to-black p-6 flex flex-col shadow-[0_0_60px_rgba(56,189,248,0.35)]">
            <div className="absolute -top-3 right-4 rounded-full bg-emerald-400/10 border border-emerald-400/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Most Popular
            </div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Pro
            </div>
            <div className="mb-4 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-white">$19</span>
              <span className="text-sm text-zinc-400">/month</span>
            </div>
            <p className="mb-6 text-sm text-zinc-300">
              For indie hackers and small teams shipping to production.
            </p>
            <ul className="space-y-2 text-sm text-zinc-200 mb-8 flex-1">
              <li>· Unlimited projects</li>
              <li>· All components & updates</li>
              <li>· Priority email support</li>
              <li>· Commercial usage</li>
            </ul>
            <button className="w-full rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-black hover:bg-accent/90 transition shadow-[0_0_40px_rgba(56,189,248,0.55)]">
              Get Pro
            </button>
          </div>

          {/* Enterprise */}
          <div className="relative rounded-2xl border border-white/10 bg-zinc-950/80 p-6 flex flex-col">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Enterprise
            </div>
            <div className="mb-4 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-white">Custom</span>
            </div>
            <p className="mb-6 text-sm text-zinc-400">
              Tailored solutions and white-glove onboarding for larger teams.
            </p>
            <ul className="space-y-2 text-sm text-zinc-300 mb-8 flex-1">
              <li>· Custom licensing</li>
              <li>· Design reviews</li>
              <li>· Dedicated support</li>
              <li>· SLA & security review</li>
            </ul>
            <button className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition">
              Contact sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

