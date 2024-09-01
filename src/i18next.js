import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TranslationEN from './Component/locale/en.json' ;
import TranslationAR from './Component/locale/ar.json'; 
// import LanguageDetector from "i18next" ;
const resources = {
  en: {
    translation: TranslationEN
  },
  ar: {
    translation: TranslationAR
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;