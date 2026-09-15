export const profile = {
  logo: "/logo/Farma24.jpeg",
  name: "Farma24 Pharmacy",
  tagline: "Your health, our priority.",
  location: "T-Mall · Kisumu · Upperhill · Ngumba",
  brandBlue: "#1e3a8a",
  brandRed: "#dc2626",
};

/* ---------- Link list ---------- */
export type LinkItem = {
  title: string;
  description: string;
  href: string;
  icon: string;
  domain?: string;
  section?: "services" | "socials";
};

/* ---------- Featured event (offer banner) ---------- */
export const featuredEvent = {
  label: "This month",
  title: "Free blood pressure & sugar screening",
  description:
    "Walk in to any Farma24 branch. No appointment. Bring your ID.",
  href: "https://wa.me/254704041591?text=Hi%20Farma24%2C%20I%27d%20like%20to%20book%20a%20free%20screening.",
};

/* ---------- Marketing mode config ---------- */
export const marketing = {
  headline: "Your pharmacy, now on WhatsApp.",
  subheadline: "Refills · Insurance · Free delivery — in minutes, not hours.",

  trust: [
    { icon: "shield", label: "Licensed by PPB" },
    { icon: "location", label: "4 branches in Kenya" },
    { icon: "truck", label: "Free delivery" },
  ],

  offer: {
    label: "This month",
    title: "Free blood pressure & sugar screening",
    description:
      "Walk in to any Farma24 branch. No appointment. Bring your ID.",
    cta: "Book free screening",
    href: "https://wa.me/254704041591?text=Hi%20Farma24%2C%20I%27d%20like%20to%20book%20a%20free%20screening.",
  },

  /* Section headings shown in the UI */
  sections: {
    services: "Our services",
    socials: "Stay connected", // ← renamed to cover socials + website
  },

  leadCapture: {
    badge: "Free to join",
    title: "Join our WhatsApp community",
    description:
      "Weekly health tips from our pharmacists, plus exclusive offers. No spam — leave anytime.",
    cta: "Join community",
    href: "https://chat.whatsapp.com/Fm0EZ3e0LBCLpykgRjSp7P ",
  },
};

/* ---------- Links ---------- */
export const links: LinkItem[] = [
  /* --- SERVICES --- */
  {
    title: "Order Prescription Refill",
    description: "Send your prescription on WhatsApp — we'll prepare it for pickup or delivery.",
    href: "https://wa.me/254704041591?text=Hi%20Farma24%2C%20I%27d%20like%20to%20refill%20my%20prescription.",
    icon: "pill",
    domain: "wa.me",
    section: "services",
  },
  {
    title: "Chat with a Pharmacist",
    description: "Ask about dosage, side effects, or how to take your medication.",
    href: "https://wa.me/254704041591?text=Hi%20Farma24%2C%20I%20have%20a%20question%20for%20a%20pharmacist.",
    icon: "chat",
    domain: "wa.me",
    section: "services",
  },
  {
    title: "Insurance Processing",
    description:
      "Britam · Old Mutual · CIC · APA · KCB · Co-op · Minet · Fidelity · Icealion · Heritage · More.",
    href: "https://wa.me/254704041591?text=Hi%20Farma24%2C%20I%27d%20like%20to%20process%20my%20insurance.",
    icon: "shield",
    domain: "wa.me",
    section: "services",
  },
  {
    title: "Out-of-Stock Sourcing",
    description: "Can't find your medicine anywhere? We'll source it for you.",
    href: "https://wa.me/254704041591?text=Hi%20Farma24%2C%20I%27m%20looking%20for%20a%20medication%20that%27s%20out%20of%20stock.",
    icon: "pill",
    domain: "wa.me",
    section: "services",
  },
  {
    title: "Chronic Refill Management",
    description: "For diabetes, hypertension, asthma & long-term medication.",
    href: "https://wa.me/254704041591?text=Hi%20Farma24%2C%20I%27d%20like%20help%20managing%20my%20chronic%20refills.",
    icon: "star",
    domain: "wa.me",
    section: "services",
  },
  {
    title: "Health Services",
    description: "BP & sugar checks, consultations & vaccinations.",
    href: "https://wa.me/254704041591?text=Hi%20Farma24%2C%20I%27d%20like%20to%20book%20a%20health%20service.",
    icon: "event",
    domain: "wa.me",
    section: "services",
  },

  /* --- SOCIALS --- */
  {
    title: "Instagram",
    description: "@farma24pharmacy",
    href: "https://www.instagram.com/farma_24pharmacy?stkn=Nm5uMHF0cHYxdGRw",
    icon: "instagram",
    domain: "instagram.com",
    section: "socials",
  },
  {
    title: "TikTok",
    description: "@farma24pharmacy",
    href: "https://www.tiktok.com/@farma24pharmacy?_r=1&_t=ZS-99inqjOj7zj",
    icon: "tiktok",
    domain: "tiktok.com",
    section: "socials",
  },
  
  {
    title: "Facebook",
    description: "Farma24 Pharmacy",
    href: "https://www.facebook.com/share/14wdyVDpcoU/",
    icon: "facebook",
    domain: "facebook.com",
    section: "socials",
  },

  /* --- WEBSITE (kept for later — commented out until live) --- */
   {
     title: "Visit Our Website",
     description: "farma24pharmacy.com",
    href: "/ComingSoon",
     icon: "globe",
     domain: "farma24pharmacy.com",
     section: "socials",
   },
];

/* ---------- Socials (footer) ---------- */
export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/farma_24pharmacy?stkn=Nm5uMHF0cHYxdGRw" },
  { label: "TikTok", href: "https://www.tiktok.com/@farma24pharmacy?_r=1&_t=ZS-99inqjOj7zj" },
  { label: "Facebook", href: "https://www.facebook.com/share/14wdyVDpcoU/" },
];

/* ---------- Footer ---------- */
export const footer = {
  line1: "Farma24 Pharmacy · T-Mall, Kisumu, Upperhill & Ngumba",
  // Website link only shows once the site is live.
  // Leave websiteLabel empty to hide it in the footer component.
  websiteLabel: "",
  websiteHref: "",
};