import type { PagesConfig } from "../types";

// Bilingual page config (original fields stay in English, _zh suffix for Chinese)
interface BilingualPageConfig {
    title: string;
    subtitle: string;
    isActive: boolean;
}

const pages: Record<string, BilingualPageConfig> = {
    home: {
        title: "About Me",
        subtitle: "",
        isActive: true,
    },
    blog: {
        title: "Blog",
        subtitle: "Thoughts on physics, philosophy, and music.",
        isActive: false,
    },
    publications: {
        title: "Publications",
        subtitle: "A collection of research papers and scientific articles.",
        isActive: true,
    },
    talks: {
        title: "Talks & Presentations",
        subtitle: "Public lectures, colloquia, and conference presentations.",
        isActive: true,
    },
    projects: {
        title: "Code & Projects",
        subtitle: "Open source contributions and technological experiments.",
        isActive: false,
    },
    teaching: {
        title: "Teaching",
        subtitle: "Academic courses and educational materials.",
        isActive: true,
    },
    tags: {
        title: "Tags",
        subtitle: "Explore content by topic.",
        isActive: false,
    },
    cv: {
        title: "Curriculum Vitae",
        subtitle: "Academic and professional history.",
        isActive: true,
    },
};

// Chinese translations (kept separate so PagesConfig type stays unchanged)
export const PAGES_ZH: Record<string, { title: string; subtitle: string }> = {
    home: { title: "关于我", subtitle: "" },
    publications: { title: "学术论文", subtitle: "同行评审研究论文与学术发表。" },
    talks: { title: "学术报告与讲座", subtitle: "受邀报告、研讨会与学术会议演讲。" },
    teaching: { title: "教学活动", subtitle: "课程教学与教育实践。" },
    tags: { title: "标签", subtitle: "按主题浏览内容。" },
    cv: { title: "个人简历", subtitle: "学术背景与职业经历。" },
};

export const PAGES: PagesConfig = pages;