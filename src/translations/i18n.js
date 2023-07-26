import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";
import esTranslation from "./es.json";

// Configuración de idiomas y recursos de traducción
const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Idioma predeterminado
  fallbackLng: "en", // Idioma de fallback si el idioma seleccionado no está disponible
  interpolation: {
    escapeValue: false, // React ya escapa los valores para evitar inyección de código, por lo que no es necesario hacerlo en este caso.
  },
});

export default i18n;
