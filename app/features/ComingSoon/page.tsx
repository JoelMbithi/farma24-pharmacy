"use client";

import Image from "next/image";
import Link from "next/link";
import { profile } from "../../shared/profile";

export default function ComingSoon() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16">
      {/* Soft background glows using brand colors */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 700px 420px at 15% -5%, rgba(30, 58, 138, 0.10), transparent 60%),
            radial-gradient(ellipse 600px 420px at 90% 110%, rgba(220, 38, 38, 0.08), transparent 55%)
          `,
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Brand mark */}
        <div className="mb-8 flex flex-col items-center">
          <div className="relative h-20 w-20 overflow-hidden rounded-full bg-white ring-1 ring-black/5 shadow-sm">
            <Image
              src={profile.logo}
              alt={profile.name}
              fill
              sizes="80px"
              className="object-cover"
              priority
            />
          </div>
          <p className="mt-4 font-black text-[20px] uppercase tracking-[0.2em] text-brand-blue">
            {profile.name}
          </p>
        </div>

        {/* Status pill */}
        <div className="mb-6 flex justify-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{
              border: `1px solid ${profile.brandBlue}33`,
              color: profile.brandBlue,
              backgroundColor: `${profile.brandBlue}0d`,
            }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ backgroundColor: profile.brandRed }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ backgroundColor: profile.brandRed }}
              />
            </span>
            Coming soon
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-balance text-center font-serif text-[34px] font-semibold leading-[1.15] text-neutral-900">
          We&apos;re building something for your health
        </h1>

        {/* Sub-copy */}
        <p className="mt-4 text-balance text-center font-serif text-[15px] leading-relaxed text-brand-red">
          This page is on its way. In the meantime, reach us at any of our
          branches or follow Farma24 for updates.
        </p>

        {/* Branch cards */}
        <div className="mt-8 flex flex-col gap-3">
          {[
            { name: "T-Mall", phone: "0704041591", hq: true },
            { name: "Kisumu", phone: "0704041591", hq: false },
            { name: "Upperhill", phone: "0704041591", hq: false },
            { name: "Ngumba T-Mall", phone: "0796875659", hq: false },
          ].map((branch) => (
            <a
              key={branch.name}
              href={`tel:${branch.phone}`}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3 transition hover:border-brand-blue/40 hover:bg-neutral-50 active:scale-[0.99]"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: branch.hq
                      ? "rgba(220, 38, 38, 0.12)"
                      : "rgba(30, 58, 138, 0.10)",
                    color: branch.hq ? profile.brandRed : profile.brandBlue,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4"
                  >
                    <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>

                <div className="flex flex-col">
                  <span className="font-semibold text-neutral-900">
                    {branch.name}
                    {branch.hq && (
                      <span
                        className="ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                        style={{
                          backgroundColor: `${profile.brandRed}1a`,
                          color: profile.brandRed,
                        }}
                      >
                        HQ
                      </span>
                    )}
                  </span>
                  <span className="text-[12px] text-neutral-500">
                    {branch.phone}
                  </span>
                </div>
              </div>

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition group-hover:bg-brand-blue group-hover:text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .18 5.32.18 11.88c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.82 11.82 0 0 0 5.72 1.46h.01c6.55 0 11.87-5.32 11.87-11.88 0-3.17-1.24-6.15-3.42-8.44zM12.07 21.8h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.21-3.76.98 1-3.67-.23-.38a9.82 9.82 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.9-9.89 9.9zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.2 3.05.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.62.71.22 1.35.19 1.86.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
      </svg>
              </span>
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3">
          <a
            href="https://chat.whatsapp.com/your-invite-code"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center opacity-90 gap-2 rounded-full bg-brand-red py-3.5 text-[14px] font-semibold text-white transition hover:bg-white hover:text-brand-red active:scale-[0.99]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .18 5.32.18 11.88c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.82 11.82 0 0 0 5.72 1.46h.01c6.55 0 11.87-5.32 11.87-11.88 0-3.17-1.24-6.15-3.42-8.44zM12.07 21.8h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.21-3.76.98 1-3.67-.23-.38a9.82 9.82 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.9-9.89 9.9z" />
            </svg>
            Join our WhatsApp community
          </a>

          <Link
            href="/"
            className="flex w-full items-center justify-center rounded-full border border-black/10 bg-brand-blue py-3.5 text-[14px] font-semibold text-white transition hover:bg-white hover:text-brand-blue active:scale-[0.99]"
          >
            ← Back to all links
          </Link>
        </div>

        {/* Footer line */}
        <p className="mt-10 text-center font-serif text-[14px] text-neutral-500">
          {profile.tagline}
        </p>
      </div>
    </main>
  );
}