/**
 * Lightweight i18n dictionary for UI text.
 * For bio and CV content, bilingual text is embedded directly in the Markdown
 * and toggled via CSS (html[lang] selectors).
 */

export const UI = {
  "nav.about": { en: "About", zh: "关于" },
  "nav.publications": { en: "Publications", zh: "学术论文" },
  "nav.talks": { en: "Talks", zh: "学术报告" },
  "nav.teaching": { en: "Teaching", zh: "教学" },
  "nav.projects": { en: "Code", zh: "代码" },
  "nav.posts": { en: "Blog", zh: "博客" },
  "nav.cv": { en: "CV", zh: "简历" },
  "nav.tags": { en: "Tags", zh: "标签" },
  "page.about_title": { en: "About Me", zh: "关于我" },
  "page.publications_title": { en: "Publications", zh: "学术论文" },
  "page.talks_title": { en: "Talks & Presentations", zh: "学术报告与讲座" },
  "page.teaching_title": { en: "Teaching", zh: "教学活动" },
  "page.cv_title": { en: "Curriculum Vitae", zh: "个人简历" },
  "page.tags_title": { en: "Tags", zh: "标签" },
  "footer.builtWith": { en: "Built with", zh: "使用" },
  "footer.themeToggle": { en: "Toggle Dark Mode", zh: "切换深浅模式" },
  "footer.devTools": { en: "Developer Tools", zh: "开发工具" },
  "footer.rssFeed": { en: "RSS Feed", zh: "RSS 订阅" },
  "lang.switch": { en: "中文", zh: "English" },
  "lang.label": { en: "Language", zh: "语言" },
  "readingTime.suffix": { en: "min read", zh: "分钟" },
  "backLink.prefix": { en: "Go back to", zh: "返回" },
} as const;

export type TranslationKey = keyof typeof UI;
export type Locale = "en" | "zh";

export function getCurrentLocale(): Locale {
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem("lang");
    // Match both "zh" and "zh-CN" (and zh-TW/zh-HK for traditional Chinese users)
    if (stored && stored.startsWith("zh")) return "zh";
    if (stored === "en") return "en";
  }
  if (typeof navigator !== "undefined") {
    const nav = navigator.language || (navigator as any).userLanguage || "";
    // covers zh, zh-CN, zh-TW, zh-HK, zh-Hant, etc.
    return nav.startsWith("zh") ? "zh" : "en";
  }
  return "en";
}

export function t(key: TranslationKey, locale?: Locale): string {
  const entry = UI[key];
  if (!entry) return key;
  return entry[locale || getCurrentLocale()] || entry.en;
}