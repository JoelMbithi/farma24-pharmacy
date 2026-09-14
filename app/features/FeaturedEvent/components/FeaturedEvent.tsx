import { featuredEvent } from "../../../shared/profile";

export default function FeaturedEvent() {
  return (
    <div className="mb-8 px-4">
      <a
        href={featuredEvent.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-lg border border-neutral-200 bg-neutral-50 p-5 transition-colors hover:border-brand-red/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
        style={{ borderLeft: "3px solid #224F93" }}
      >
        <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-blue">
          {featuredEvent.label}
        </p>
        <h2 className="mt-1.5 text-[16px] font-semibold leading-snug text-brand-red group-hover:underline">
          {featuredEvent.title}
        </h2>
        <p className="mt-1 text-[13.5px] leading-snug text-brand-blue">
          {featuredEvent.description}
        </p>
      </a>
    </div>
  );
}