import { PillLabel } from "./ui/PillLabel";
import { useSiteContent } from "../hooks/useSiteContent";

export const Footer = () => {
  const { content } = useSiteContent();
  const { settings, footer } = content;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border text-center text-text-muted text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-semibold uppercase tracking-[0.2em] text-[10px]">
          © {currentYear} {settings.ownerName}. {footer.rightsReservedLabel}
        </div>
        <div className="flex items-center gap-4">
          <PillLabel className="cursor-default border-transparent bg-transparent hover:text-text-primary transition-colors">{footer.privacyLabel}</PillLabel>
          <PillLabel className="cursor-default border-transparent bg-transparent hover:text-text-primary transition-colors">{footer.termsLabel}</PillLabel>
          <PillLabel className="cursor-default border-transparent bg-transparent hover:text-text-primary transition-colors">{footer.cookiePolicyLabel}</PillLabel>
        </div>
      </div>
    </footer>
  );
};
