import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import en from "../../public/locales/en/common.json";
import ptBR from "../../public/locales/pt-BR/common.json";

export default function initI18n() {
  i18n
    .use(detector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        ptBR: { translation: ptBR },
      },
      fallbackLng: "ptBR",
    });
}
