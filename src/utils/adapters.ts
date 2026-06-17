import type { ListingItem, DetailItem } from "../types";

function formatDate(dateValue: string | Date | undefined): string | undefined {
    if (!dateValue) return undefined;
    const date = typeof dateValue === 'string' ? new Date(dateValue) : dateValue;
    if (isNaN(date.getTime())) return undefined;
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

/**
 * Wraps "PeiYu Cai" (optionally followed by a † marker) in <strong> for visual emphasis
 * while keeping the † visible after the tag.
 * e.g. "PeiYu Cai†" → "<strong>PeiYu Cai</strong>†"
 *      "PeiYu Cai"  → "<strong>PeiYu Cai</strong>"
 */
function boldAuthor(authorString: string): string {
    return authorString.replace(
        /PeiYu Cai(†?)/g,
        '<strong>PeiYu Cai</strong>$1',
    );
}

export function getListingItem(entry: any): ListingItem {
    const d = entry.data;
    
    return {
        title: d.title,
        description: d.description,
        date: formatDate(d.date),
        authors: d.author ? boldAuthor(d.author) : undefined,
        extraInput: d.journal || d.event || d.institution,
        tags: d.tags || [],
        externalUrl: d.external_url,
        image: d.image,
    };
}

export function getDetailItem(entry: any, collection: string): DetailItem {
    const listing = getListingItem(entry);
    
    return {
        ...listing,
        backHref: collection === 'posts' ? '/posts' : `/${collection}`,
    };
}