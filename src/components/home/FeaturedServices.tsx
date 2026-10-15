import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/config/services";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedServices() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-saffron">Services</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Where would you like to go?
        </h2>
      </Reveal>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <li key={s.slug}>
            <Reveal delay={(i % 3) * 0.08} className="h-full">
              <Link
                href={`/services#${s.slug}`}
                className="group relative flex h-full min-h-64 flex-col justify-end overflow-hidden rounded-3xl border border-white/10 p-6 transition-colors hover:border-white/25"
                style={{ background: s.gradient }}
              >
                <ArrowUpRight
                  aria-hidden="true"
                  className="absolute right-5 top-5 size-5 text-ink/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-saffron"
                />
                <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {s.highlights.slice(0, 3).map((h) => (
                    <li
                      key={h}
                      className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}