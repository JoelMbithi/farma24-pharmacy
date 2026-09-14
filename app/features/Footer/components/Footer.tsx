import { footer } from "../../../shared/profile";

export default function SiteFooter() {
  return (
    <footer className="mb-10 mt-4 px-4 text-center text-[12px] leading-relaxed text-neutral-400">
      <p>{footer.line1}</p>

      {footer.websiteHref && footer.websiteLabel && (
        <a
          href={footer.websiteHref}
          className="mt-1 inline-block text-brand-red underline-offset-2 hover:text-brand-blue hover:underline"
        >
          {footer.websiteLabel}
        </a>
      )}
    </footer>
  );
}