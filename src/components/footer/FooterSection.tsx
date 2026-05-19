import type { LegalSection } from "@/types/portfolioTypes";
import { ChevronUp } from "lucide-react";

type FooterLegalSection = Exclude<LegalSection, null>;

const FooterButton = ({
  label,
  onFooterClick,
  openSection,
}: {
  label: FooterLegalSection;
  onFooterClick: (section: FooterLegalSection) => void;
  openSection: boolean;
}) => {
  const chevronClassName = `pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 h-5 w-5 transition-all duration-300 ${
    openSection
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
  }`;

  return (
    <button
      type="button"
      value={label.toLowerCase()}
      onClick={() => onFooterClick(label)}
      className="group relative flex items-center hover:cursor-pointer"
      aria-expanded={openSection}
      aria-controls="legal-overlay-panel"
    >
      <ChevronUp className={chevronClassName} />
      <span className="text-sm text-(--foreground)">{label}</span>
    </button>
  );
};

const FooterSection = ({
  openSection,
  onFooterClick,
}: {
  openSection: LegalSection;
  onFooterClick: (section: LegalSection) => void;
}) => {
  const handleClick = (section: LegalSection) => {
    onFooterClick(section);
  };

  return (
    <footer
      id="footer"
      data-testid="footer"
      className="border-t border-(--border) bg-(--background) px-18 py-8"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm text-(--foreground)/70">© 2026 Lothaire</span>

        <div className="flex items-center gap-8">
          <FooterButton
            label="impressum"
            onFooterClick={handleClick}
            openSection={openSection === "impressum"}
          />
          <FooterButton
            label="privacy"
            onFooterClick={handleClick}
            openSection={openSection === "privacy"}
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
