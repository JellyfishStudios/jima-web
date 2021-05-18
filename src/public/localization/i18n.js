import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import { TRANSLATIONS_JP } from "./locales/jp";
import { TRANSLATIONS_EN } from "./locales/en";
 
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    react: { 
      useSuspense: false  
    },
    preload: ['en', 'ja'],
    resources: {
      en: {
        translation: TRANSLATIONS_EN
      },
      jp: {
        translation: TRANSLATIONS_JP
      }
    }
  });

export default i18n;