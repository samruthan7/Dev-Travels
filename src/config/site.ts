export const siteConfig = {
  name: "Dev Travels Chennai",
  tagline: "Journeys planned with care",
  description:
    "Travel enquiries, tour packages and bookings from Chennai.",
  // Width and height only set the aspect ratio: match your SVG's viewBox.
  logo: {
    src: "/logo.svg",
    alt: "Dev Travels Chennai logo",
    width: 160,
    height: 48,
  },
  phone: {
    display: "+91 95660 29009", // shown on the page
    tel: "+919566029009",       // used in tel: links, no spaces
  },
  whatsapp: "919566029009",     // digits only, for wa.me/919566029009 links
  email: "devtravelschennai@gmail.com",
  contact: {
    phone: "+91 9566029009",
    whatsapp: "+91 9566029009",
    email: "devtravelschennai@gmail.com",
    address: "Chennai, Tamil Nadu",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Reach Us", href: "/reach-us" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;