import { createContext } from "react";
import React, { useEffect, useMemo, useState } from "react"
import en from "@/locales/en.json"
import fr from "@/locales/fr.json"

type Locale = "fr" | "en"

const messages = {
  fr,
  en,
} as const

function getNestedValue(obj: unknown, path: string): string {
  if (!obj || typeof obj !== "object") return path

  const value = path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key]
    }
    return undefined
  }, obj)

  return typeof value === "string" ? value : path
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const contextValue = useMemo(() => {
    const t = (path: string) => getNestedValue(messages[locale], path)

    return {
      locale,
      setLocale,
      toggleLocale: () => setLocale((prev) => (prev === "fr" ? "en" : "fr")),
      t,
    }
  }, [locale])

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}


interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: (path: string) => string
}

const LanguageContext = createContext<LanguageContextValue >({
    locale: "en",
    setLocale: () => {},
    toggleLocale: () => {},
    t: (path: string) => path,
})

export default LanguageContext

