import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import en from "./i18n/en.json";
import ptBR from "./i18n/pt-BR.json";

export default function initI18n() {
  i18n
    .use(detector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: {
            hi: "Hi, I am Gui Barbosa",
          },
        },
        ptBR: {
          translation: {
            hi: "Olá, meu nome é Gui Barbosa",
          },
        },
      },
      fallbackLng: "ptBR",
    });
}
