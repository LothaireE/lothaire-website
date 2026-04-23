import { useEffect, useRef, useState } from "react";
import { useLanguageContext } from "@/context/appContext";
import SettingsMenu from "./landing/SettingsMenu";
import LandingNav from "./nav/LandingNav";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import { InlineInfoTip } from "./InlineInfoTip";

const PortfolioLanding = () => {
  const { t, locale } = useLanguageContext();
  const profileData = locale === "fr" ? fr.profile : en.profile;
  const cityLocations = profileData.locations.join(" - ");

  const [copied, setCopied] = useState(false);
  const [emailOpened, setEmailOpened] = useState(false);

  const copiedTimeoutRef = useRef<number | null>(null);
  const emailTimeoutRef = useRef<number | null>(null);

  const showCopiedFeedback = () => {
    setCopied(true);

    if (copiedTimeoutRef.current) {
      window.clearTimeout(copiedTimeoutRef.current);
    }

    copiedTimeoutRef.current = window.setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  const showEmailFeedback = () => {
    setEmailOpened(true);

    if (emailTimeoutRef.current) {
      window.clearTimeout(emailTimeoutRef.current);
    }

    emailTimeoutRef.current = window.setTimeout(() => {
      setEmailOpened(false);
    }, 1800);
  };

  useEffect(() => {
    return () => {
      if (copiedTimeoutRef.current)
        window.clearTimeout(copiedTimeoutRef.current);

      if (emailTimeoutRef.current) window.clearTimeout(emailTimeoutRef.current);
    };
  }, []);

  const handlePhoneClick = async () => {
    if (copied) return;
    try {
      const type = "text/plain";
      const clipboardItemData = {
        [type]: profileData.phone.replace(/\s/g, ""),
      };
      const clipboardItem = new ClipboardItem(clipboardItemData);

      await navigator.clipboard.write([clipboardItem]);
      showCopiedFeedback();
    } catch (error) {
      console.error("Failed to copy phone number:", error);
    }
  };

  const writeEmail = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    showEmailFeedback();
    window.location.href = `mailto:${profileData.email}`;
    return false;
  };

  return (
    <section
      id="portfolio-landing"
      data-testid="portfolio-landing"
      className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between py-8 px-6 sm:px-10 md:px-8 lg:px-8"
    >
      <div className="flex justify-end">
        <div className="w-full max-w-4xl text-right leading-[0.88]">
          <h1 className="text-[56px] font-black uppercase italic leading-[0.82] tracking-[-0.08em] sm:text-[72px] md:text-[96px] lg:text-[110px] xl:text-[132px] 2xl:text-[148px]">
            <span className="block">{t("profile.firstname")}</span>
            <span className="block">{t("profile.lastname")}</span>
          </h1>
          <h2 className=" text-[34px] font-semibold italic tracking-[-0.05em] sm:text-[48px] md:text-[56px]">
            {t("profile.profession")}
          </h2>
        </div>
      </div>

      {/* Settings & Nav */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="min-h-50 w-full col-span-1 flex items-center">
          <SettingsMenu />
        </div>
        <div className="min-h-50 w-full  col-span-1 md:col-span-2 flex items-center justify-end">
          <LandingNav />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-8">
        <div className="border border-[bg-current] max-w-fit px-3 py-2 text-[13px] uppercase tracking-tight sm:text-[15px]">
          <span className="block">{t("landing.locationLabel")}</span>
          <span className="block">{cityLocations}</span>
        </div>

        <div className="w-full md:w-fit  text-right leading-none">
          <button onClick={handlePhoneClick} className="hover:cursor-pointer">
            <div className="group relative inline-flex">
              <p className="text-[36px] font-black tracking-[-0.07em] md:text-[56px] 2xl:text-[72px]">
                {t("profile.phone")}
              </p>
              <InlineInfoTip
                hoverLabel={t("landing.phoneCta")}
                activeLabel={t("landing.phoneCopied")}
                active={copied}
              />
            </div>
          </button>

          <a href="#" onClick={writeEmail}>
            <div className="group relative inline-flex">
              <p className="text-[28px] font-semibold tracking-[-0.05em] sm:text-[36px] md:text-[42px] 2xl:text-[56px]">
                {t("profile.email")}
              </p>
              <InlineInfoTip
                hoverLabel={t("landing.emailCta")}
                activeLabel={t("landing.emailOpened")}
                active={emailOpened}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioLanding;
