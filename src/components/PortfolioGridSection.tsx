import { useRef, useState } from "react";
import BackToTopButton from "./BackToTopButton";
import ScrollProgress from "./ScrollProgress";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import FooterSection from "./sections/FooterSection";
import ImpressumSection from "./sections/ImpressumSection";
import PrivacySection from "./sections/PrivacySection";
import OverlayPanel from "./sections/OverlayPanel";
import type { LegalSection } from "@/types/portfolioTypes";

export const gridSectionId = "portfolio-grid-section";


const PortfolioGridSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [openSection, setOpenSection] = useState<LegalSection>(null);

  const handleFooterClick = (section: LegalSection) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };


  const handleCloseLegalSection = () => {
    setOpenSection(null);
  };


  return (
    <>
      <ScrollProgress containerId={gridSectionId} />

      <section
        id={gridSectionId}
        data-testid={gridSectionId}
        ref={sectionRef}
        className="relative h-full overflow-y-auto scroll-smooth bg-(--background)"
      >
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />

        <div className="relative" >
        <OverlayPanel
          isOpen={openSection !== null}
          title={openSection === "impressum" ? "Impressum" : "Privacy"}
          onClose={handleCloseLegalSection}
        >
          {openSection === "impressum" && <ImpressumSection />}
          {openSection === "privacy" && <PrivacySection />}
        </OverlayPanel>
         <FooterSection
            openSection={openSection}
            onFooterClick={handleFooterClick}
          />
        </div>
      </section>
      <BackToTopButton targetRef={sectionRef} />
    </>
  );
};

export default PortfolioGridSection;