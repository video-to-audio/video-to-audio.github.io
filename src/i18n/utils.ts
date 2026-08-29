import { ui, defaultLang, languages, type SupportedLanguage } from './ui';

/**
 * Extracts language key from current URL pathname
 */
export function getLangFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in ui) {
    return lang as SupportedLanguage;
  }
  return defaultLang;
}

/**
 * Returns translation lookup function for a specific language
 */
export function useTranslations(lang: SupportedLanguage) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    const langDict = ui[lang] as Record<string, string> | undefined;
    const fallbackDict = ui[defaultLang] as Record<string, string>;
    return (langDict && langDict[key]) || fallbackDict[key] || (key as string);
  };
}

/**
 * Generates localized path for a given language
 */
export function getLocalizedPath(targetLang: SupportedLanguage, currentPath: string = '/'): string {
  // Strip existing language prefix if present
  let cleanPath = currentPath;
  const segments = currentPath.split('/').filter(Boolean);
  
  if (segments.length > 0 && segments[0] in languages) {
    segments.shift();
    cleanPath = '/' + segments.join('/');
  }

  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }

  if (targetLang === defaultLang) {
    return cleanPath === '' ? '/' : cleanPath;
  }

  return `/${targetLang}${cleanPath === '/' ? '' : cleanPath}`;
}

/**
 * Returns list of supported language objects
 */
export function getSupportedLanguages() {
  return Object.values(languages);
}
