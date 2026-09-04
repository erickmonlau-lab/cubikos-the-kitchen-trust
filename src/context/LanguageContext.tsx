import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Language = "ES" | "CA" | "EN";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ES",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("ES");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cubikos_lang") as Language;
      if (saved && (saved === "ES" || saved === "CA" || saved === "EN")) {
        setLangState(saved);
        document.documentElement.lang = saved.toLowerCase();
      }
    } catch {
      // ignore
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("cubikos_lang", newLang);
      document.documentElement.lang = newLang.toLowerCase();
    } catch {
      // ignore
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
