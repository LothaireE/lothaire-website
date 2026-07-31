import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

export type Locale = "en" | "fr";

export const siteUrl = "https://lothaire-epee.com";

export const locales = {
  en,
  fr,
} as const;

export const localeConfig = {
  en: {
    path: "/",
    label: "English",
    alternate: "/fr/",
    alternateLabel: "Francais",
  },
  fr: {
    path: "/fr/",
    label: "Francais",
    alternate: "/",
    alternateLabel: "English",
  },
} as const;

export function getLocalePath(locale: Locale) {
  return localeConfig[locale].path;
}

export function getProjectPath(locale: Locale, slug: string) {
  return `${getLocalePath(locale)}projects/${slug}/`;
}

export function getCanonicalUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function getProjectBySlug(locale: Locale, slug: string) {
  return locales[locale].projects.projectList.find((project) => project.slug === slug);
}
