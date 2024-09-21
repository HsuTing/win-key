'use client'

import { ParallaxProvider } from 'react-scroll-parallax'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'

i18n
  .use(
    resourcesToBackend((language, namespace) =>
      import(`../public/locales/${language}/${namespace}.json`)
    )
  )
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    preload: typeof window === 'undefined' ? ['en', 'zh-TW', 'ja'] : [],
  })

export function Providers({ children }) {
  return <ParallaxProvider>{children}</ParallaxProvider>
}
