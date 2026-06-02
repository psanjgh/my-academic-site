import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Mail",
        href: "mailto:peiyu.cai@ed.ac.uk",
        linkTitle: `Send an email to PeiYu Cai`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?user=SL9C-u4AAAAJ",
        linkTitle: `PeiYu Cai on Google Scholar`,
        isActive: true,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/0000-0002-3903-8941",
        linkTitle: `PeiYu Cai on ORCID`,
        isActive: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/peiyu-cai-040694194/",
        linkTitle: `PeiYu Cai on LinkedIn`,
        isActive: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
};