import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import localisation from './localisation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: localisation,
    detection: { order: ['path', 'localStorage', 'navigator'] },
    supportedLngs: ['en', 'de'],
    fallbackLng: 'en',
  });

export default i18n;
