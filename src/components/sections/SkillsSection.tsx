import { useLanguageContext } from "@/context/appContext";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

const SkillCategory = ({ label, items }: { label?: string; items: string[] }) => {
  return (
    <div key={label} className="border-t border-foreground/15 pt-4">
      {label && (
        <h3 className="mb-4 text-[1.1rem] font-medium leading-none tracking-[-0.04em] text-foreground">
          {label}
        </h3>
      )}
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="text-[15px] leading-[1.2] tracking-[-0.03em] text-foreground/85"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection = () => {
  const { t, locale } = useLanguageContext();

  const { skills, expertise } =
    locale === "fr"
      ? { skills: fr.skills, expertise: fr.expertise }
      : { skills: en.skills, expertise: en.expertise };

  return (
    <>
      <section id="skills" data-testid="skills" className="bg-background text-foreground">
        <div className="mx-auto min-h-screen w-full max-w-350 px-6 py-8 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <div className="border-t border-foreground/15 flex flex-col gap-8 lg:gap-10">
            <div className="mx-auto w-full max-w-400 py-4 md:pt-8">
              <h2 className="font-black uppercase text-[2.5rem] xl:text-[3.4rem] 2xl:text-[4rem] leading-[0.97] tracking-[-0.02em]">
                {t("skillsAndExpertise.title")}
              </h2>
            </div>
            <div>
              <p className="text-[2rem] md:text-[3rem] lg:text-[3.8rem] leading-[0.97] tracking-[-0.06em]">
                {t("skillsAndExpertise.intro")}
              </p>
            </div>
            {/* skills */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[120px_minmax(0,1fr)] lg:gap-x-12">
              <div className="text-[0.85rem] uppercase tracking-[0.04em] text-foreground/60 text-center md:text-left pt-0 md:pt-3.25">
                {t("skillsAndExpertise.stackLabel")}
              </div>
              <div className="grid grid-cols-2 gap-x-10 gap-y-12 md:grid-cols-4">
                <SkillCategory label={skills.frontend.label} items={skills.frontend.items} />
                <SkillCategory label={skills.backend.label} items={skills.backend.items} />
                <SkillCategory
                  label={skills.programmingLanguages.label}
                  items={skills.programmingLanguages.items}
                />
                <SkillCategory label={skills.tools.label} items={skills.tools.items} />
              </div>
            </div>
            {/* expert */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[120px_minmax(0,1fr)] lg:gap-x-12">
              <div className="text-[0.85rem] uppercase tracking-[0.04em] text-foreground/60 text-center md:text-left pt-0 md:pt-3.25">
                {t("expertise.stackLabel")}
              </div>
              <div>
                <SkillCategory items={expertise.items} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
