"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next, I18nextProvider } from "react-i18next";
import { useEffect } from "react";
import locales from "@/locales";

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: locales,
  fallbackLng: "en",
});

export function Providers({ children }) {
  return (
    <ParallaxProvider>
      <I18nextProvider i18n={i18n} defaultNS={"translation"}>
        {children}
      </I18nextProvider>
    </ParallaxProvider>
  );
}
