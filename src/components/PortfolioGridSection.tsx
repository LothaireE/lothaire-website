import { useRef } from "react";
import BackToTopButton from "./BackToTopButton";
import ScrollProgress from "./ScrollProgress";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

export const gridSectionId = "portfolio-grid-section"

const PortfolioGridSection = () => {
    const sectionRef = useRef<HTMLElement | null>(null)

    return (
      <> 
        <ScrollProgress containerId={gridSectionId} />
        <section id={gridSectionId} data-testid={gridSectionId} ref={sectionRef} className="h-full overflow-y-auto scroll-smooth bg-background">
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
        </section>
        <BackToTopButton targetRef={sectionRef} />
      </>
    );
};

export default PortfolioGridSection;