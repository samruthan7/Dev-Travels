import type { Metadata } from "next";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { EnquiryForm } from "@/components/form/EnquiryForm";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "Reach Us",
  description: "Send an enquiry to Dev Travels Chennai by form, phone or WhatsApp.",
  alternates: { canonical: "/reach-us" },
};
export default async function ReachUsPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const defaultService = services.some((s) => s.slug === service) ? service : "";
  const options = services.map((s) => ({ slug: s.slug, title: s.title }));

  const contacts = [
    { icon: Phone, label: "Call", value: siteConfig.phone.display, href: `tel:${siteConfig.phone.tel}` },
    { icon: MessageCircle, label: "WhatsApp", value: siteConfig.phone.display, href: `https://wa.me/${siteConfig.whatsapp}` },
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MapPin, label: "Location", value: siteConfig.contact.address },
  ];

  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-saffron">Reach us</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Tell us about your trip
        </h1>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <ul className="space-y-4">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/3 p-5">
                <Icon aria-hidden="true" className="mt-0.5 size-5 text-saffron" />
                <div>
                  <p className="text-sm text-white/60">{label}</p>
                  {href ? (
                    <a href={href} className="font-medium hover:text-saffron">{value}</a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <EnquiryForm services={options} defaultService={defaultService} />
        </Reveal>
      </div>
    </main>
  );
}