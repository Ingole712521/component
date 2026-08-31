import { SiFramer, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

const stack = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Framer Motion", Icon: SiFramer },
];

export default function LogoStrip() {
  return (
    <section className="border-y border-[var(--color-border)] py-9">
      <div className="page-container-wide">
        <p className="text-center text-sm text-[var(--muted)] mb-6">Works in the stack you already use</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {stack.map(({ name, Icon }) => (
            <div key={name} className="flex items-center gap-2 text-[var(--muted)]">
              <Icon className="w-5 h-5" aria-hidden />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
