import { useLanguageContext } from "@/context/appContext";
import NavLinkButton from "../nav/NavLinkButton";

const Navigation = () => {
  const { t } = useLanguageContext();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="max-w-4xl text-right leading-[0.88]">
      <ul>
        <li className="hover:cursor-pointer mt-2 text-[32px] font-medium italic tracking-[-0.05em] md:text-[40px]">
          <NavLinkButton onClick={() => scrollToSection("about")}>
            {t("nav.about")}
          </NavLinkButton>
        </li>
        <li className="hover:cursor-pointer mt-2 text-[32px] font-medium italic tracking-[-0.05em] md:text-[40px]">
          <NavLinkButton onClick={() => scrollToSection("skills")}>
            {t("nav.skills")}
          </NavLinkButton>
        </li>
        <li className="hover:cursor-pointer mt-2 text-[32px] font-medium italic tracking-[-0.05em] md:text-[40px]">
          <NavLinkButton onClick={() => scrollToSection("experience")}>
            {t("nav.experience")}
          </NavLinkButton>
        </li>
        <li className="hover:cursor-pointer mt-2 text-[32px] font-medium italic tracking-[-0.05em] md:text-[40px]">
          <NavLinkButton onClick={() => scrollToSection("projects")}>
            {t("nav.projects")}
          </NavLinkButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
