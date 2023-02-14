import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/en.json";
import so from "./translations/so.json";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    so: {
      translation: so,
    },
  },
  lng: "so",
  fallbackLng: "so",
  interpolation: {
    escapeValue: false,
  },
});
