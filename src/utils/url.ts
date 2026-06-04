/**
 * URL utility functions for consistent base URL resolution across components.
 * Replaces the duplicated baseUrl/basePath/toBaseHref logic found in 7+ files.
 */

/** Returns the base URL with a trailing slash, e.g. "/" or "/my-base/" */
export function getBaseUrl(): string {
    const raw = import.meta.env.BASE_URL;
    return raw.endsWith("/") ? raw : `${raw}/`;
}

/** Returns the base URL without a trailing slash, e.g. "" or "/my-base" */
export function getBasePath(): string {
    const url = getBaseUrl();
    return url.endsWith("/") ? url.slice(0, -1) : url;
}

/**
 * Resolves a site-relative href against the configured base URL.
 * @example toBaseHref("/posts") returns "/my-base/posts" when base is "/my-base/"
 * @example toBaseHref("/") returns "/my-base/" when base is "/my-base/"
 */
export function toBaseHref(href: string): string {
    const baseUrl = getBaseUrl();
    const basePath = getBasePath();
    return href === "/" ? baseUrl : `${basePath}${href}`;
}

/**
 * Resolves the favicon path to an absolute URL.
 * Handles both external (http/https) and relative paths.
 */
export function resolveFaviconHref(favicon: string): string {
    if (favicon.startsWith("http")) return favicon;
    const baseUrl = getBaseUrl();
    return `${baseUrl}${favicon.replace(/^\//, "")}`;
}