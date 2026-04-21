import { useLanguageContext } from "@/context/appContext"
import en from "@/locales/en.json"
import fr from "@/locales/fr.json"
import type { SingleExperienceProps } from "@/types/portfolioTypes"


const SingleExperience = ({stackLabel, isFirstItem, item } : SingleExperienceProps) => {
  const containerClassName = `${isFirstItem ? "" : "border-t border-foreground/20" } pt-5`

  return (
    <article
      key={`${item.period}-${item.company}`}
      className={containerClassName}
    >
      <div className="grid grid-cols-1  gap-6 lg:gap-8 lg:grid-cols-3">
        <div className="space-y-3 col-span-1">
          <p className="text-[15px] leading-[1.1] tracking-[-0.03em] text-foreground/70">
            {item.period}
          </p>

          <div className="leading-none">
            <h3 className="text-[1.8rem] font-medium tracking-[-0.06em] sm:text-[2.2rem]">
              {item.role}
            </h3>
            <p className="mt-1 text-[1.1rem] tracking-[-0.04em] text-foreground/85">
              {item.company}
            </p>
            <p className="mt-1 text-[15px] tracking-[-0.03em] text-foreground/60">
              {item.location}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:col-span-2 gap-8">
          <div className="space-y-5 col-span-1 xl:col-span-2 ">
            <div className="max-w-full md:max-w-54 lg:max-w-60 2xl:max-w-65 text-[15px] leading-[1.28] tracking-[-0.03em] text-foreground/85">
              <p>
                {item.summary}
              </p>
            </div>
            <ul className="space-y-1.5 max-w-full md:max-w-54 lg:max-w-60 2xl:max-w-65">
              {item.missions.map((mission) => (
                <li
                  key={mission}
                  className="text-[15px] leading-[1.2] tracking-[-0.03em] text-foreground/75"
                >
                  {mission}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-[13px] uppercase tracking-[0.04em] text-foreground/50">
              {stackLabel}
            </p>

            <ul className="flex flex-wrap pt-0.5 gap-1.5 md:gap-0 space-x-1.5 md:flex-col md:space-y-1.5">
              {item.stack.map((tech) => (
                <li
                  key={tech}
                  className="text-[15px] leading-[1.2] tracking-[-0.03em] text-foreground/85"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}


const ExperienceSection = () => {
  const { t, locale } = useLanguageContext()

  const stackLabel = t("experience.stackLabel")
  
  const experiences = locale === "fr" ? fr.experience.experienceList : en.experience.experienceList

  return (
      <section id="experience" data-testid="experience" className="bg-background text-foreground">
        <div className="mx-auto min-h-screen w-full max-w-350 px-6 py-8 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <div className="mx-auto w-full max-w-400 py-4 md:pt-8 border-t border-foreground/15">
            <h2 className="font-black uppercase text-[2.5rem] xl:text-[3.4rem] 2xl:text-[4rem] leading-[0.97] tracking-[-0.02em]">
              {t("experience.title")}
            </h2>
          </div>
          <div className="mx-auto w-full max-w-400 py-8 ">
              <div className="space-y-14">
                {experiences?.map((item, index) => {
                  const isFirstItem = index === 0 
                  return (
                  <SingleExperience 
                    key={item.id}
                    stackLabel={stackLabel} 
                    isFirstItem={isFirstItem} 
                    item={item}/>
                )})}
              </div>
          </div>
        </div>
      </section>
  )
}

export default ExperienceSection
