import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from "i18next-browser-languagedetector";
 
import { TRANSLATIONS_JP } from "./jp";
import { TRANSLATIONS_EN } from "./en";
 
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
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