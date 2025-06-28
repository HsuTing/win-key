"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next, I18nextProvider } from "react-i18next";
import locales from "@/locales";
import { useParams } from "next/navigation";

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: locales,
  fallbackLng: "en",
});

export function Providers({ children }) {
  const params = useParams();

  if (typeof window === "undefined" && params?.lang) {
    i18n.init({
      lng: params.lang,
      resources: locales,
      fallbackLng: "en",
    });
  }

  return (
    <ParallaxProvider>
      <I18nextProvider i18n={i18n} defaultNS={"translation"}>
        {children}
      </I18nextProvider>
    </ParallaxProvider>
  );
}
