import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}.`,
};

function Placeholder({ children }: { children: string }) {
  return (
    <p className="rounded-xl border border-dashed border-saffron/50 bg-saffron/5 p-4 text-sm text-mist">
      <span className="font-medium text-saffron">PLACEHOLDER: </span>
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 pb-24 pt-32 sm:px-8">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-saffron">About</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 text-mist">{siteConfig.description}</p>
      </Reveal>

      <div className="mt-12 space-y-10">
        <Reveal>
          <section>
            <h2 className="font-display text-2xl font-semibold">Our story</h2>
            <div className="mt-3">
              <Placeholder>
                Write 2 to 3 sentences about how and when the company started. Add only facts you can stand behind.
              </Placeholder>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-2xl font-semibold">What we do</h2>
            <p className="mt-3 text-mist">
              We plan and book trips from Chennai, including Tirupati travel from Chennai and Mumbai.
              See the Services page for the full list.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-2xl font-semibold">Why travellers choose us</h2>
            <div className="mt-3">
              <Placeholder>
                List real reasons only (for example vehicle types, languages spoken, support hours). No made-up numbers or reviews.
              </Placeholder>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-2xl font-semibold">Contact</h2>
            <ul className="mt-3 space-y-1 text-mist">
              <li>Phone: {siteConfig.phone.display}</li>
              <li>Email: {siteConfig.email}</li>
              <li>Location: {siteConfig.contact.address}</li>
            </ul>
            <div className="mt-6">
              <Button href="/reach-us" variant="accent">
                Send an enquiry
              </Button>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}