"use client";

import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { links, marketing } from "@/app/shared/profile";

/* ============================================================
   ICONS
============================================================ */
const ICONS: Record<string, ReactElement> = {
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .58.05.85.13V9.4a6.33 6.33 0 0 0-.85-.06A6.34 6.34 0 0 0 5.66 20.6a6.34 6.34 0 0 0 10.86-4.43V8.68a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.7-.11z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.79-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1L3.2 9.4l6.1-.9L12 3z" />
    </svg>
  ),
  event: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
  pill: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <rect x="2.5" y="8.5" width="19" height="7" rx="3.5" transform="rotate(-45 12 12)" />
      <path d="M9 9l6 6" />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M12 3l8 3v5c0 4.5-3.4 8.5-8 10-4.6-1.5-8-5.5-8-10V6l8-3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  location: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
};

const BRAND_COLORS: Record<string, string> = {
  whatsapp: "#25D366",
  instagram: "#E4405F",
  tiktok: "#000000",
  facebook: "#1877F2",
  star: "#1e3a8a",
  event: "#dc2626",
  globe: "#1e3a8a",
  pill: "#1e3a8a",
  truck: "#16a34a",
  shield: "#0ea5e9",
  chat: "#25D366",
  location: "#dc2626",
};

type Mode = "marketing" | "full";

/* ============================================================
   COMPONENT
============================================================ */
export default function LinkList({ mode = "marketing" }: { mode?: Mode }) {
  const [active, setActive] = useState<(typeof links)[number] | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isMarketing = mode === "marketing";
  const serviceLinks = links.filter((l) => l.section === "services");
  const socialLinks = links.filter((l) => l.section === "socials");

  const handleShare = async (key: string) => {
    if (!active) return;
    const encoded = encodeURIComponent(active.href);
    const text = encodeURIComponent(active.title);
    const open = (url: string) =>
      window.open(url, "_blank", "noopener,noreferrer");

    switch (key) {
      case "copy": {
        try {
          await navigator.clipboard.writeText(active.href);
        } catch {
          const ta = document.createElement("textarea");
          ta.value = active.href;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
      }
      case "x":
        open(`https://twitter.com/intent/tweet?url=${encoded}&text=${text}`);
        break;
      case "facebook":
        open(`https://www.facebook.com/sharer/sharer.php?u=${encoded}`);
        break;
      case "whatsapp":
        open(`https://wa.me/?text=${text}%20${encoded}`);
        break;
      case "email":
         window.location.href = "mailto:farma24kenya@gmail.com";
        break;
    }
    setActive(null);
  };

  /* ============================================================
     LINK CARD — with hover fill effect
  ============================================================ */
  const LinkCard = ({ link }: { link: (typeof links)[number] }) => {
    const brand = BRAND_COLORS[link.icon] ?? "#1e3a8a";
    return (
      <li>
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-lg bg-white px-4 py-3.5 transition-colors duration-150 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-200"
            style={{
              backgroundColor: `${brand}1f`,
              color: brand,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = brand;
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = `${brand}1f`;
              e.currentTarget.style.color = brand;
            }}
          >
            {ICONS[link.icon] ?? ICONS.globe}
          </span>

          <div className="min-w-0 flex-1">
            <p className="text-[15.5px] font-semibold text-neutral-900">
              {link.title}
            </p>
            <p className="text-[12.5px] text-neutral-500">
              {link.description}
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActive(link);
            }}
            aria-label={`Share ${link.title}`}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-neutral-400 transition hover:bg-brand-blue/10 hover:text-brand-blue active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <circle cx="12" cy="5" r="1.8" />
              <circle cx="12" cy="12" r="1.8" />
              <circle cx="12" cy="19" r="1.8" />
            </svg>
          </button>
        </a>
      </li>
    );
  };

  return (
    <>
      {/* ============================================================
          MARKETING TRUST LINE
      ============================================================ */}
      {isMarketing && (
        <div className="mb-6 mt-5 px-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] text-neutral-600">
            {marketing.trust.map((t) => (
              <li
                key={t.label}
                className="flex items-center gap-1.5 whitespace-nowrap"
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center text-brand-red [&>svg]:h-4 [&>svg]:w-4">
                  {ICONS[t.icon] ?? ICONS.shield}
                </span>
                <span className="leading-none">{t.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ============================================================
          SERVICES SECTION
      ============================================================ */}
      <section className="mb-8">
        <h2 className="mb-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
          {marketing.sections.services}
        </h2>
        <ul className="flex flex-col gap-2.5 px-4">
          {serviceLinks.map((link) => (
            <LinkCard key={link.title} link={link} />
          ))}
        </ul>
      </section>

      {/* ============================================================
          SOCIALS SECTION
      ============================================================ */}
      <section className="mb-8">
        <h2 className="mb-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
          {marketing.sections.socials}
        </h2>
        <ul className="flex flex-col gap-2.5 px-4">
          {socialLinks.map((link) => (
            <LinkCard key={link.title} link={link} />
          ))}
        </ul>
      </section>

      {/* ============================================================
          LEAD CAPTURE
      ============================================================ */}
      {isMarketing && (
        <div className="mb-8 px-4">
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-5">
            <h3 className="text-[15px] font-semibold text-neutral-900">
              {marketing.leadCapture.title}
            </h3>
            <p className="mt-1 text-[12.5px] leading-snug text-neutral-500">
              {marketing.leadCapture.description}
            </p>
            <a
              href={marketing.leadCapture.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center rounded-md bg-brand-blue py-3 text-[13px] font-semibold text-white transition hover:bg-brand-blue/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            >
              {marketing.leadCapture.cta}
            </a>
          </div>
        </div>
      )}

      {/* ============================================================
          SHARE SHEET
      ============================================================ */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="share-link-title"
        >
          <div
            className="absolute inset-0 bg-black/40 animate-[fadeIn_150ms_ease-out]"
            onClick={() => setActive(null)}
          />
          <div className="relative w-full max-w-md overflow-hidden rounded-t-2xl bg-white shadow-xl animate-[slideUp_250ms_cubic-bezier(0.16,1,0.3,1)] sm:rounded-2xl">
            <div className="flex items-center justify-between px-6 pb-2 pt-5">
              <h2
                id="share-link-title"
                className="text-[15px] font-semibold text-neutral-900"
              >
                Share link
              </h2>
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mx-6 my-3 flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                {ICONS[active.icon] ?? ICONS.globe}
              </div>
              <div className="min-w-0">
                <p className="truncate text-[13.5px] font-semibold text-neutral-900">
                  {active.title}
                </p>
                <p className="truncate text-[12px] text-neutral-500">
                  {active.domain ?? active.href.replace(/^https?:\/\//, "")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-y-5 px-4 pb-5 pt-2">
              {[
                {
                  name: "Copy link",
                  key: "copy",
                  color: "#0a0a0a",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                      <rect x="9" y="9" width="11" height="11" rx="2" />
                      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                    </svg>
                  ),
                },
                {
                  name: "WhatsApp",
                  key: "whatsapp",
                  color: "#25D366",
                  icon: ICONS.whatsapp,
                },
                {
                  name: "Facebook",
                  key: "facebook",
                  color: "#1877F2",
                  icon: ICONS.facebook,
                },
                {
                  name: "Email",
                  key: "email",
                  color: "#EA4335",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  ),
                },
              ].map((c) => (
                <button
                  key={c.key}
                  onClick={() => handleShare(c.key)}
                  className="group flex flex-col items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full shadow-sm transition-all duration-200 group-hover:scale-105 group-hover:shadow-md group-active:scale-95"
                    style={{ backgroundColor: c.color, color: "#ffffff" }}
                  >
                    {c.icon}
                  </span>
                  <span className="text-center text-[11px] leading-tight text-neutral-600">
                    {c.key === "copy" && copied ? "Copied!" : c.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="border-t border-neutral-200 bg-neutral-50 px-6 py-5">
              <p className="mb-3 text-center text-[12px] text-neutral-500">
                Your health, our priority — from prescription to doorstep.
              </p>
              <a
                href="https://wa.me/254704041591"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-md bg-brand-red py-3 text-[13px] font-semibold text-white transition hover:bg-brand-red/90"
              >
                Chat with a pharmacist
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(16px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </>
  );
}