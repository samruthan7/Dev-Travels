import { Reveal } from "@/components/ui/Reveal";

// Generic wording. Replace with your real booking process if it differs.
const steps = [
  { n: "01", title: "Tell us your plan", text: "Share where you want to go, when, and how many are travelling." },
  { n: "02", title: "We put it together", text: "We get back to you with a package that fits your plan." },
  { n: "03", title: "Travel", text: "Confirm your booking and head out on your trip." },
];

export function Process() {
  return (
    <section className="border-y border-white/10 bg-navy/60">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-saffron">How it works</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Three simple steps
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={i * 0.1} className="h-full">
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7">
                  <span className="font-display text-3xl font-semibold text-saffron">{s.n}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}