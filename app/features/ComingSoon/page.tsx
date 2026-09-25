"use client";

import Image from "next/image";
import Link from "next/link";
import { profile } from "../../shared/profile";

export default function ComingSoon() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16">
      {/* Background image — full visibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/coming-son-bg.jpg')",
        }}
      />

      {/* Light overlay so text stays readable */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-white/85"
      />

      {/* Soft brand glows on top of the image */}
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
            { name: "T-Mall", phone: "0182608910", hq: true },
            { name: "Kisumu", phone: "0794298066", hq: false },
            { name: "Upperhill", phone: "0704041591", hq: false },
            { name: "Thika Road (Thika Road (Ngumba)) ", phone: "0796875659", hq: false },
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
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3">
          <a
            href="https://chat.whatsapp.com/Fm0EZ3e0LBCLpykgRjSp7P"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-red py-3.5 text-[14px] font-semibold text-white opacity-90 transition hover:bg-white hover:text-brand-red active:scale-[0.99]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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