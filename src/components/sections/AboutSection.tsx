import { useLanguageContext } from "@/context/appContext"
import { useTheme } from "next-themes"
import ScrollCTA from "../ScrollCTA"
import { useEffect, useState } from "react"
import { gridSectionId } from "../PortfolioGridSection"


const AboutSection = () => {
  const { t } = useLanguageContext()
  const { theme } = useTheme()

  
  const [isScrolled, setIsScrolled] = useState(false)

  const portraitStyle = theme === "dark" ? "h-full w-full object-cover grayscale" : "h-full w-full object-cover"

  const scrollBoxClassName = `hidden md:flex justify-center transition-all duration-700 ${
            isScrolled
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`

  useEffect(() => {
    const scrollContainer = document.getElementById(gridSectionId)

    if (!scrollContainer) return

    const onScroll = () => {
      setIsScrolled(scrollContainer.scrollTop > 24)
    }

    onScroll()
    scrollContainer.addEventListener("scroll", onScroll)

    return () => scrollContainer.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section id="about" data-testid="about" className="min-h-screen lg:h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-350 px-6 py-6 sm:px-8 md:px-10 lg:h-full lg:px-12 lg:py-6 xl:px-16">
        <div className="flex flex-col justify-between gap-8 lg:h-full lg:gap-8">
          <div>
            {/* <p className="text-[2rem] md:text-[3rem] lg:text-[3.8rem] leading-[0.97] tracking-[-0.06em]"> */}
            <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.5rem] 2xl:text-[3.8rem] leading-[0.97] tracking-[-0.06em]">
              {t("about.intro")}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.9fr)] lg:gap-14">
            
            <div className="overflow-hidden">
              <div className="md:max-h-110 lg:max-h-130 xl:max-h-145 2xl:max-h-160">
                <img
                  src={t("profile.portrait.src")}
                  alt={t("profile.portrait.alt")}
                  className={portraitStyle}
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="flex flex-col justify-between gap-10 my-auto">
               <div className="space-y-5"> 
                <p className="max-w-[42ch] text-[15px] 2xl:text-[18px] leading-[1.28] tracking-[-0.03em] text-foreground/85 text-foreground/85">
                  {t("about.sideText1")}
                </p>
                <p className="max-w-[42ch] text-[15px] 2xl:text-[18px] leading-[1.28] tracking-[-0.03em] text-foreground/85 text-foreground/85">
                  {t("about.sideText2")}
                </p>
                <p className="max-w-[42ch] text-[15px] 2xl:text-[18px] leading-[1.28] tracking-[-0.03em] text-foreground/85 text-foreground/85">
                  {t("about.sideText3")}
                </p>
              </div>

            </div>
          </div>
          <div>
            <p className="italic leading-[0.97] tracking-[-0.06em] sm:text-[2rem] text-[1.9rem]">
              {t("about.closing")}
            </p>
          </div>
          <div className={scrollBoxClassName} >
            <ScrollCTA targetId="skills"/>
          </div>
        </div>  
      </div>
    </section>
  )
}

export default AboutSection


    // <div className="border-t border-foreground/15 pt-6">
    //   <a
    //     href="#contact"
    //     className="group flex items-end justify-between gap-6 transition-opacity duration-200 hover:opacity-70"
    //   >
    //     <h2 className="text-[3.5rem] leading-[0.9] tracking-[-0.08em] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[8rem]">
    //       {t("about.bottomCta")}
    //     </h2>

    //     <span className="mb-1 text-[2.4rem] tracking-[-0.08em] transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1 sm:text-[3rem] md:text-[3.6rem] lg:text-[4.5rem]">
    //       ↘
    //     </span>
    //   </a>
    // </div>