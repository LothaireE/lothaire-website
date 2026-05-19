import { useLanguageContext } from "@/context/appContext";
import NavLinkButton from "./NavLinkButton";
import { scrollToSection } from "@/utils/utils";

const LandingNav = () => {
  const { t } = useLanguageContext();

  const handleSectionClick = (id: string) => {
    scrollToSection(id);
  };

  return (
    <nav className="max-w-4xl text-right leading-[0.88]">
      <ul>
        <li className="mt-2 text-[32px] font-medium italic tracking-[-0.05em] md:text-[40px]">
          <NavLinkButton onClick={() => handleSectionClick("about")}>
            {t("nav.about")}
          </NavLinkButton>
        </li>
        <li className="mt-2 text-[32px] font-medium italic tracking-[-0.05em] md:text-[40px]">
          <NavLinkButton onClick={() => handleSectionClick("skills")}>
            {t("nav.skills")}
          </NavLinkButton>
        </li>
        <li className="mt-2 text-[32px] font-medium italic tracking-[-0.05em] md:text-[40px]">
          <NavLinkButton onClick={() => handleSectionClick("experience")}>
            {t("nav.experience")}
          </NavLinkButton>
        </li>
        <li className="mt-2 text-[32px] font-medium italic tracking-[-0.05em] md:text-[40px]">
          <NavLinkButton onClick={() => handleSectionClick("projects")}>
            {t("nav.projects")}
          </NavLinkButton>
        </li>
      </ul>
    </nav>
  );
};

export default LandingNav;
