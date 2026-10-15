export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  destinations: string[];
  highlights: string[];
  gradient: string; // Tailwind gradient classes, used until photos are licensed
  href: string;
};

export const services: Service[] = [
  {
    slug: "tirupati",
    title: "Tirupati",
    summary: "Pilgrimage travel to Tirupati from Chennai and Mumbai.",
    description: "Pilgrimage travel to Tirupati from Chennai and Mumbai.",
    destinations: ["Tirupati", "Tirumala"],
    highlights: ["From Chennai", "Mumbai to Tirupati", "Group and family travel"],
    gradient: "from-amber-500/40 to-rose-700/40",
    href: "/services#tirupati",
  },
  {
    slug: "south-india",
    title: "South India Tours",
    summary: "Tour plans across South Indian destinations.",
    description: "Tour plans across South Indian destinations.",
    destinations: ["Kerala", "Ooty", "Kodaikanal", "Pondicherry"],
    highlights: ["Custom itineraries", "Family and group plans"],
    gradient: "from-emerald-500/40 to-cyan-700/40",
    href: "/services#south-india",
  },
  {
    slug: "pilgrimage",
    title: "Temple Tours",
    summary: "Temple circuits planned around your dates.",
    description: "Temple circuits planned around your dates.",
    destinations: ["Madurai", "Rameswaram", "Kanchipuram"],
    highlights: ["Day trips", "Multi-day circuits"],
    gradient: "from-orange-500/40 to-purple-700/40",
    href: "/services#pilgrimage",
  },
  {
    slug: "custom",
    title: "Custom Trips",
    summary: "Tell us where you want to go and we will plan it.",
    description: "Tell us where you want to go and we will plan it.",
    destinations: ["Anywhere in India"],
    highlights: ["Your dates", "Your budget"],
    gradient: "from-sky-500/40 to-indigo-700/40",
    href: "/reach-us",
  },
];