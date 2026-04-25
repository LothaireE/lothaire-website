import { useState } from "react";
import { useLanguageContext } from "@/context/appContext";
import { Menu, X } from "lucide-react";
import { useIsInView } from "@/hooks/useIsInView";
import { landingNavID } from "../PortfolioLanding";
import { scrollToSection } from "@/utils/utils";
import { useTheme } from "next-themes";

const MobileNav = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const { t } = useLanguageContext();

  const handleSectionPress = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <nav>
      <ul className="flex flex-col flex-wrap p-3 text-right">
        <li className="py-1">
          <button onClick={() => handleSectionPress("portfolio-landing")}>
            {t("mobileNav.home")}
          </button>
        </li>
        <li className="py-1">
          <button onClick={() => handleSectionPress("about")}>{t("mobileNav.about")}</button>
        </li>
        <li className="py-1">
          <button onClick={() => handleSectionPress("skills")}>{t("mobileNav.skills")}</button>
        </li>
        <li className="py-1">
          <button onClick={() => handleSectionPress("experience")}>
            {t("mobileNav.experience")}
          </button>
        </li>
        <li className="py-1">
          <button onClick={() => handleSectionPress("projects")}>{t("mobileNav.projects")}</button>
        </li>
      </ul>
    </nav>
  );
};

const MobileSettings = () => {
  const { theme, setTheme } = useTheme();
  const { t, locale, setLocale } = useLanguageContext();

  return (
    <div className="border-t border-(--border) px-3 py-1 text-right">
      <ul className="flex flex-col">
        <li className="py-2">
          <label className="flex cursor-pointer items-center justify-end gap-2">
            <span className="text-[0.85rem] tracking-[0.04em] text-(--foreground)">EN</span>
            <input
              type="checkbox"
              checked={locale === "fr"}
              onChange={() => setLocale(locale === "fr" ? "en" : "fr")}
              className="peer sr-only"
            />
            <div className="relative h-4 w-8 rounded-full bg-(--muted) transition-colors after:absolute after:left-0.5 after:top-0.5 after:h-3 after:w-3 after:rounded-full after:bg-(--foreground) after:transition-transform after:duration-300 peer-checked:bg-(--foreground)/30 peer-checked:after:translate-x-4" />
            <span className="text-[0.85rem] tracking-[0.04em] text-(--foreground)">FR</span>
          </label>
        </li>
        <li className="py-2">
          <label className="flex cursor-pointer items-center justify-end gap-2">
            <span className="text-[0.85rem] tracking-[0.04em] text-(--foreground)">
              {t("mobileSettings.light")}
            </span>
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="peer sr-only"
            />
            <div className="relative h-4 w-8 rounded-full bg-(--muted) transition-colors after:absolute after:left-0.5 after:top-0.5 after:h-3 after:w-3 after:rounded-full after:bg-(--foreground) after:transition-transform after:duration-300 peer-checked:bg-(--foreground)/30 peer-checked:after:translate-x-4" />

            <span className="text-[0.85rem] tracking-[0.04em] text-(--foreground)">
              {t("mobileSettings.dark")}
            </span>
          </label>
        </li>
      </ul>
    </div>
  );
};

const MobileMenu = () => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  const isInView = useIsInView(landingNavID);

  if (isInView) return null;

  const menuClassName = `absolute right-0 mt-4 w-45 bg-background backdrop-blur-xl transition-all duration-300
          ${open ? " opacity-100 translate-y-0" : " opacity-0 translate-y-2 pointer-events-none"}
          ${theme === "dark" ? " border border-foreground/15" : "shadow-lg"}`;

  return (
    <div className="fixed top-4 right-4 z-90 md:hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-center dark:border dark:border-amber-50 shadow rounded-3xl bg-background p-2 backdrop-blur-sm transition-opacity hover:opacity-70"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className={menuClassName}>
        <MobileNav setOpen={setOpen} />
        <MobileSettings />
      </div>
    </div>
  );
};

export default MobileMenu;
