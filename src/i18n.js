// i18n.js（このファイルだけ置き換え）
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enRaw from './locales/en.json';
import ja from './locales/ja.json';

/**
 * 空文字("")や空白だけの値を「存在しないキー」として扱えるように、
 * 翻訳オブジェクトから再帰的に削除するサニタイズ処理。
 * こうすることで i18next の fallbackLng（=ja）が正しく発火します。
 */
function pruneEmpty(obj) {
  if (obj == null || typeof obj !== 'object') return obj;
  const out = Array.isArray(obj) ? [] : {};
  for (const k of Object.keys(obj)) {
    const v = obj[k];
    if (v && typeof v === 'object') {
      const child = pruneEmpty(v);
      // 空オブジェクトは捨てる
      if (child && ((Array.isArray(child) && child.length) || (!Array.isArray(child) && Object.keys(child).length))) {
        out[k] = child;
      }
    } else {
      // 空文字・空白だけ・null・undefined を削除
      if (
        v !== '' &&
        v !== null &&
        v !== undefined &&
        !(typeof v === 'string' && v.trim().length === 0)
      ) {
        out[k] = v;
      }
    }
  }
  return out;
}

// 英語辞書から空文字キーを削除して「欠落キー」扱いにする
const en = pruneEmpty(enRaw);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ja: { translation: ja }
    },
    fallbackLng: 'ja',
    // "en-US" などを "en" に丸める（リソース名と揃える）
    load: 'languageOnly',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    // 空文字や null を“翻訳なし”として扱い、フォールバックを有効化
    returnEmptyString: false,
    returnNull: false,
    // Suspenseを使っていないときの白画面回避
    react: { useSuspense: false }
  });

export default i18n;
