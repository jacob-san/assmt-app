import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as locales from './locales';

const resources = {
  // list of languages
  en: {
    /** Provision to add region specific dialects */
    translation: locales.en_us,
  },
  ar: {
    translation: locales.ar_ae,
  },
  fr: {
    translation: locales.fr,
  },
  de: {
    translation: locales.de,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3', 
  resources,
  lng: 'en', // default language
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
