// i18n.js（全文）
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ja from './locales/ja.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ja: { translation: ja }
    },
    fallbackLng: 'ja',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    // ★ 追加：空文字/ null を“翻訳なし”とみなしてフォールバック（=日本語）に戻す
    returnEmptyString: false,
    returnNull: false,
    // ★ 非同期ロード中の白画面回避（Suspense未使用の場合）
    react: { useSuspense: false }
  });

export default i18n;
