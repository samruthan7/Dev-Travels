import type { Metadata } from "next";
import { MapPin, Check } from "lucide-react";
import { services } from "@/config/services";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "Services",
  description: "Travel services from Chennai, including Tirupati and Mumbai to Tirupati routes.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-saffron">Services</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Trips we plan for you
        </h1>
        <p className="mt-4 max-w-xl text-mist">
          Pick a category to see destinations, then send an enquiry and we will get back to you.
        </p>
      </Reveal>

      <div className="mt-14 space-y-8">
        {services.map((s) => (
          <Reveal key={s.slug}>
            <article
              id={s.slug}
              className="scroll-mt-28 overflow-hidden rounded-[28px] border border-white/10 bg-white/3"
            >
              <div className="grid gap-0 md:grid-cols-[1fr_2fr]">
                <div className={`min-h-40 bg-linear-to-br ${s.gradient}`} aria-hidden="true" />
                <div className="p-6 sm:p-8">
                  <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
                  <p className="mt-2 text-mist">{s.description}</p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-medium uppercase tracking-wider text-white/60">
                        Destinations
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {s.destinations.map((d) => (
                          <li key={d} className="flex items-center gap-2">
                            <MapPin aria-hidden="true" className="size-4 text-saffron" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium uppercase tracking-wider text-white/60">
                        Highlights
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {s.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2">
                            <Check aria-hidden="true" className="size-4 text-saffron" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button href={`/reach-us?service=${s.slug}`} variant="accent">
                      Enquire about {s.title}
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </main>
  );
}