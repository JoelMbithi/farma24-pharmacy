"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { profile } from "../../../shared/profile";

const SHARE_URL = "https://linktr.ee/farma24";
const SHARE_TITLE = "Farma24 Pharmacy — Your health, our priority";

const channels = [
  {
    name: "Copy Linktree",
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
    name: "X",
    key: "x",
    color: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    key: "facebook",
    color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.79-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    key: "whatsapp",
    color: "#25D366",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .18 5.32.18 11.88c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.82 11.82 0 0 0 5.72 1.46h.01c6.55 0 11.87-5.32 11.87-11.88 0-3.17-1.24-6.15-3.42-8.44zM12.07 21.8h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.21-3.76.98 1-3.67-.23-.38a9.82 9.82 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.9-9.89 9.9zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.2 3.05.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.62.71.22 1.35.19 1.86.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    key: "linkedin",
    color: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    name: "Messenger",
    key: "messenger",
    color: "#0084FF",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 0C5.37 0 0 4.97 0 11.11c0 3.5 1.74 6.61 4.46 8.65V24l4.08-2.24c1.09.3 2.25.46 3.46.46 6.63 0 12-4.97 12-11.11S18.63 0 12 0zm1.19 14.93l-3.06-3.26-5.96 3.26L10.9 8.1l3.13 3.26L19.94 8l-6.75 6.93z" />
      </svg>
    ),
  },
  {
    name: "Snapchat",
    key: "snapchat",
    color: "#FFFC00",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12.01 0c2.42.03 4.76 1.61 5.42 3.93.22.77.12 2.06.1 2.66-.02.36-.06.63.06.76.15.18.66.28 1.02.36.36.08.77.16 1.03.28.4.18.55.5.44.86-.14.46-.84.68-1.44.86-.35.11-.72.22-.83.42-.11.2-.06.55.02.94.36 1.72 1.72 3.2 3.34 3.86.32.13.54.42.55.77.01.42-.28.71-.72.94-.5.26-1.13.4-1.65.63-.19.08-.24.32-.34.72-.11.42-.24.94-.72 1.1-.4.14-.95-.04-1.53-.2-.6-.17-1.24-.28-1.72-.14-.36.1-.66.4-1.06.72-.7.57-1.5 1.05-2.6 1.05-1.1 0-1.9-.48-2.6-1.05-.4-.32-.7-.62-1.06-.72-.48-.14-1.12-.03-1.72.14-.58.16-1.13.34-1.53.2-.48-.16-.61-.68-.72-1.1-.1-.4-.15-.64-.34-.72-.52-.23-1.15-.37-1.65-.63-.44-.23-.73-.52-.72-.94.01-.35.23-.64.55-.77 1.62-.66 2.98-2.14 3.34-3.86.08-.39.13-.74.02-.94-.11-.2-.48-.31-.83-.42-.6-.18-1.3-.4-1.44-.86-.11-.36.04-.68.44-.86.26-.12.67-.2 1.03-.28.36-.08.87-.18 1.02-.36.12-.13.08-.4.06-.76-.02-.6-.12-1.89.1-2.66C7.25 1.61 9.59.03 12.01 0z" />
      </svg>
    ),
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
];

/* ---------- Rotating audience list for the signup modal ---------- */
const AUDIENCES = [
  "Patient follow-up support.",
  "Insurance processing.",
  "Out-of-stock sourcing.",
  "Chronic refill management.",
  "WhatsApp prescription handling.",
  "Free delivery.",
];

function RotatingAudience() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % AUDIENCES.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative h-11 w-full overflow-hidden text-start sm:h-12"
      aria-live="polite"
    >
      {AUDIENCES.map((word, i) => (
        <span
          key={word}
          aria-hidden={i !== index}
          className="absolute inset-x-0 top-0 text-[22px] font-black text-brand-red opacity-90 transition-all duration-500 ease-out sm:text-[28px]"
          style={{
            transform: `translateY(${(i - index) * 100}%)`,
            opacity: i === index ? 1 : 0,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

/* ---------- Branch list (used inside signup modal) ---------- */
const BRANCHES = [
  { name: "T-Mall", phone: "0704041591", hq: true },
  { name: "Kisumu", phone: "0704041591", hq: false },
  { name: "Upperhill", phone: "0704041591", hq: false },
  { name: "Ngumba", phone: "0796875659", hq: false },
];

export default function ProfileHeader() {
  const [open, setOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open || signupOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, signupOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setSignupOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleShare = async (key: string) => {
    const encoded = encodeURIComponent(SHARE_URL);
    const text = encodeURIComponent(SHARE_TITLE);
    const openWindow = (url: string) =>
      window.open(url, "_blank", "noopener,noreferrer");

    switch (key) {
      case "copy": {
        try {
          await navigator.clipboard.writeText(SHARE_URL);
        } catch {
          const ta = document.createElement("textarea");
          ta.value = SHARE_URL;
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
        openWindow(`https://twitter.com/intent/tweet?url=${encoded}&text=${text}`);
        break;
      case "facebook":
        openWindow(`https://www.facebook.com/sharer/sharer.php?u=${encoded}`);
        break;
      case "whatsapp":
        openWindow(`https://wa.me/?text=${text}%20${encoded}`);
        break;
      case "linkedin":
        openWindow(`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`);
        break;
      case "messenger":
        openWindow(
          `https://www.facebook.com/dialog/send?link=${encoded}&app_id=291494419107518&redirect_uri=${encoded}`
        );
        break;
      case "snapchat":
        openWindow(`https://www.snapchat.com/scan?attachmentUrl=${encoded}`);
        break;
      case "email":
        window.location.href = `mailto:?subject=${text}&body=${encoded}`;
        break;
    }
    setOpen(false);
  };

  return (
    <>
      <header className="relative z-[1] flex flex-col items-center">
        <div className="mt-4 flex w-full items-center justify-between px-4 py-3">
          {/* Logo — clickable to open the Farma24 services modal */}
          <button
            type="button"
            onClick={() => setSignupOpen(true)}
            aria-label="Open Farma24 services"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            <div className="relative h-9 w-9 overflow-hidden rounded-full bg-white">
              <Image
                src={profile.logo}
                alt={profile.name}
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </div>
          </button>

          {/* Share button */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Share"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-neutral-600 transition hover:bg-black/5 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path d="M12 16V4" />
              <path d="m7 9 5-5 5 5" />
              <path d="M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" />
            </svg>
          </button>
        </div>

        {/* Avatar */}
        <div className="flex w-full flex-col items-center">
          <div className="mb-4 mt-2">
            <div className="relative h-32 w-32 overflow-hidden rounded-full bg-white sm:h-44 sm:w-44">
              <Image
                src={profile.logo}
                alt={profile.name}
                fill
                sizes="(max-width: 640px) 128px, 176px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative mx-6 max-w-full">
            <h1 className="text-center text-[1.5rem] font-semibold leading-[1.2] text-neutral-900">
              {profile.name}
            </h1>
          </div>
          <div className="mt-1 px-6">
            <h2 className="text-balance text-center text-[15px] font-normal leading-snug text-brand-blue">
              {profile.tagline}
            </h2>
          </div>
        </div>

        {profile.location && (
          <div
            className="mb-6 mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{
              border: `1px solid ${profile.brandBlue}33`,
              color: profile.brandRed,
            }}
          >
            {profile.location}
          </div>
        )}
      </header>

      {/* ---------- Share modal ---------- */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="share-title"
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px] animate-[fadeIn_150ms_ease-out]"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-full max-w-md overflow-hidden rounded-t-3xl bg-white shadow-xl animate-[slideUp_250ms_cubic-bezier(0.16,1,0.3,1)] sm:rounded-3xl">
            <div className="flex items-center justify-between px-6 pb-2 pt-5">
              <h2 id="share-title" className="text-[15px] font-semibold text-neutral-900">
                Share Farma24
              </h2>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-500 transition hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3 px-6 py-4">
              <div className="relative h-12 w-12 shrink-0 ring-1 ring-brand-blue overflow-hidden rounded-full bg-neutral-100">
                <Image
                  src={profile.logo}
                  alt={profile.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="truncate text-[14px] font-semibold text-neutral-900">
                  {profile.name}
                </p>
                <p className="truncate text-[12px] text-neutral-500">
                  https://farma24pharmacy.com
                </p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-y-5 px-4 pb-5 pt-2">
              {channels.map((c) => (
                <button
                  key={c.key}
                  onClick={() => handleShare(c.key)}
                  className="group flex flex-col items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full shadow-sm transition group-hover:scale-105 group-hover:shadow-md group-active:scale-95"
                    style={{
                      backgroundColor: c.color,
                      color: c.key === "snapchat" ? "#0a0a0a" : "#ffffff",
                    }}
                  >
                    {c.icon}
                  </span>
                  <span className="text-center text-[11px] leading-tight text-neutral-600">
                    {c.key === "copy" && copied ? "Copied!" : c.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="border-t border-black/5 bg-neutral-50/70 px-6 py-5">
              <p className="mb-3 text-center text-[12px] text-neutral-500">
                Your health, our priority — from prescription to doorstep.
              </p>
              <a
                href="https://wa.me/254704041591"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 flex w-full items-center justify-center rounded-full bg-brand-red py-3 text-[13px] font-semibold text-white transition hover:opacity-90"
              >
                Chat with a pharmacist
              </a>
              <a
                href="/ComingSoon"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-[12px] text-neutral-600 underline-offset-2 hover:underline"
              >
                View all our services
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ---------- Farma24 services modal (formerly "Linktree signup") ---------- */}
      {signupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="signup-title"
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px] animate-[fadeIn_150ms_ease-out]"
            onClick={() => setSignupOpen(false)}
          />
          <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto overscroll-contain rounded-t-3xl bg-brand-blue pb-[env(safe-area-inset-bottom)] shadow-xl animate-[slideUp_250ms_cubic-bezier(0.16,1,0.3,1)] sm:max-h-[85vh] sm:rounded-3xl">
            {/* Close */}
            <div className="flex justify-end px-4 pt-4">
              <button
                onClick={() => setSignupOpen(false)}
                aria-label="Close"
                className="flex h-8 w-8 items-center justify-center rounded-md text-white/80 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-6 pb-8 sm:px-8 sm:pb-10">
              {/* Headline — on-brand, pharmacy voice */}
              <h2
                id="signup-title"
                className="text-start text-[32px] font-extrabold leading-tight text-white sm:text-[40px]"
              >
                Your health, our priority — in one link.
              </h2>

              {/* Rotating service list */}
              <div className="mt-5">
                <RotatingAudience />
              </div>

              {/* Sub-copy — patient-facing */}
              <p className="mt-5 text-start text-[14px] font-bold leading-relaxed text-white">
                Order refills, process insurance, and get free delivery — all from one link.
              </p>

              {/* Branch list */}
              <div className="mt-6 flex flex-col gap-3 text-[13.5px]">
                {BRANCHES.map((branch) => (
                  <a
                    key={branch.name}
                    href={`tel:${branch.phone}`}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3 transition hover:border-brand-blue/40 hover:bg-neutral-50 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: branch.hq
                            ? "rgba(220, 38, 38, 0.12)"
                            : "rgba(30, 58, 138, 0.10)",
                          color: branch.hq ? "#dc2626" : "#1e3a8a",
                        }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                          <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                      </span>

                      <div className="flex flex-col">
                        <span className="font-semibold text-neutral-900">
                          {branch.name}
                          {branch.hq && (
                            <span className="ml-2 rounded-full bg-brand-red/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-red">
                              HQ
                            </span>
                          )}
                        </span>
                        <span className="text-[12px] text-neutral-500">{branch.phone}</span>
                      </div>
                    </div>

                    {/* Call icon */}
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition group-hover:bg-brand-blue group-hover:text-white">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .18 5.32.18 11.88c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.82 11.82 0 0 0 5.72 1.46h.01c6.55 0 11.87-5.32 11.87-11.88 0-3.17-1.24-6.15-3.42-8.44zM12.07 21.8h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.21-3.76.98 1-3.67-.23-.38a9.82 9.82 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.9-9.89 9.9zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.2 3.05.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.62.71.22 1.35.19 1.86.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>

              {/* Primary CTA — patient action, not Linktree signup */}
              <a
                href="https://wa.me/254704041591"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center rounded-full bg-brand-red py-3.5 text-[14px] font-semibold text-white opacity-90 transition hover:opacity-100 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Chat with a pharmacist
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(16px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}