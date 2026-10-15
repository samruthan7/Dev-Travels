import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal>
        <div className="rounded-[28px] border border-white/10 bg-linear-to-br from-navy to-charcoal px-6 py-14 text-center sm:px-12">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Ready to plan your next trip?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-mist">
            Send us an enquiry or call {siteConfig.phone.display}.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/reach-us" variant="accent" size="lg">
              Send an enquiry
            </Button>
            <Button href={`tel:${siteConfig.phone.tel}`} variant="secondary" size="lg">
              <Phone aria-hidden="true" className="size-4" />
              Call now
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}