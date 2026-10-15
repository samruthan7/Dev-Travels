import { siteConfig } from "@/config/site";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/seo";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: siteConfig.phone.tel,
    email: siteConfig.email,
    areaServed: "Chennai, Tamil Nadu, India",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}