import { THEME_CONFIG, THEMES } from "../config";
import type { Theme } from "../types/themes";

export interface ResolvedThemes {
    themeLight: Theme;
    themeDark: Theme;
}

/**
 * Resolves the configured light and dark theme names to actual Theme objects.
 * Shared between BaseLayout and DevToolsLayout to avoid duplication.
 */
export function resolveThemes(config: typeof THEME_CONFIG): ResolvedThemes {
    const lightKey = (config.themeLight.startsWith("light_")
        ? config.themeLight
        : `light_${config.themeLight}`) as keyof typeof THEMES;
    const darkKey = (config.themeDark.startsWith("dark_")
        ? config.themeDark
        : `dark_${config.themeDark}`) as keyof typeof THEMES;

    return {
        themeLight: THEMES[lightKey] || THEMES.light_default,
        themeDark: THEMES[darkKey] || THEMES.dark_default,
    };
}

/**
 * Converts Theme objects into CSS custom property namespaced keys.
 * Produces the object format expected by Astro's define:vars.
 */
export function themeToCSSVars(themeLight: Theme, themeDark: Theme) {
    return {
        lightBg: themeLight.background,
        lightFg: themeLight.foreground,
        lightAccent: themeLight.accent,
        lightMuted: themeLight.muted,
        lightBorder: themeLight.border,
        lightSurface: themeLight.surface,

        darkBg: themeDark.background,
        darkFg: themeDark.foreground,
        darkAccent: themeDark.accent,
        darkMuted: themeDark.muted,
        darkBorder: themeDark.border,
        darkSurface: themeDark.surface,
    };
}