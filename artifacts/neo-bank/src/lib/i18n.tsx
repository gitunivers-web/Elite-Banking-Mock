import { createContext, useContext, useState } from "react";

export type LangCode =
  | "fr" | "en" | "de" | "es" | "it" | "pt" | "nl" | "pl" | "ro" | "sv"
  | "da" | "fi" | "no" | "cs" | "hu" | "el" | "bg" | "hr" | "sk" | "sl"
  | "lt" | "lv" | "et" | "ga" | "mt";

export interface Language {
  code: LangCode;
  label: string;
  flag: string;
}

export const LANGUAGES: Language[] = [
  { code: "fr", label: "Français",    flag: "🇫🇷" },
  { code: "en", label: "English",     flag: "🇺🇸" },
  { code: "de", label: "Deutsch",     flag: "🇩🇪" },
  { code: "es", label: "Español",     flag: "🇪🇸" },
  { code: "it", label: "Italiano",    flag: "🇮🇹" },
  { code: "pt", label: "Português",   flag: "🇵🇹" },
  { code: "nl", label: "Nederlands",  flag: "🇳🇱" },
  { code: "pl", label: "Polski",      flag: "🇵🇱" },
  { code: "ro", label: "Română",      flag: "🇷🇴" },
  { code: "sv", label: "Svenska",     flag: "🇸🇪" },
  { code: "da", label: "Dansk",       flag: "🇩🇰" },
  { code: "fi", label: "Suomi",       flag: "🇫🇮" },
  { code: "no", label: "Norsk",       flag: "🇳🇴" },
  { code: "cs", label: "Čeština",     flag: "🇨🇿" },
  { code: "hu", label: "Magyar",      flag: "🇭🇺" },
  { code: "el", label: "Ελληνικά",    flag: "🇬🇷" },
  { code: "bg", label: "Български",   flag: "🇧🇬" },
  { code: "hr", label: "Hrvatski",    flag: "🇭🇷" },
  { code: "sk", label: "Slovenčina",  flag: "🇸🇰" },
  { code: "sl", label: "Slovenščina", flag: "🇸🇮" },
  { code: "lt", label: "Lietuvių",    flag: "🇱🇹" },
  { code: "lv", label: "Latviešu",    flag: "🇱🇻" },
  { code: "et", label: "Eesti",       flag: "🇪🇪" },
  { code: "ga", label: "Gaeilge",     flag: "🇮🇪" },
  { code: "mt", label: "Malti",       flag: "🇲🇹" },
];

interface I18nContextType {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  currentLanguage: Language;
}

const I18nContext = createContext<I18nContextType>({
  lang: "fr",
  setLang: () => {},
  currentLanguage: LANGUAGES[0],
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(() => {
    try {
      const stored = localStorage.getItem("neobank_lang") as LangCode | null;
      return stored && LANGUAGES.find((l) => l.code === stored) ? stored : "fr";
    } catch {
      return "fr";
    }
  });

  const setLang = (l: LangCode) => {
    setLangState(l);
    try { localStorage.setItem("neobank_lang", l); } catch {}
  };

  const currentLanguage = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <I18nContext.Provider value={{ lang, setLang, currentLanguage }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
