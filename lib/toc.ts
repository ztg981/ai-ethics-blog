import type { TOCEntry } from "@/types/article";

/**
 * Extracts H2 and H3 headings from raw MDX content and returns a TOCEntry[].
 * Generates slug IDs that match the IDs applied by rehype-slug (or our custom renderer).
 */
export function extractTableOfContents(content: string): TOCEntry[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const entries: TOCEntry[] = [];

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length as 2 | 3;
    const text = match[2]
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/`/g, "")
      .trim();
    const id = slugify(text);
    entries.push({ id, text, level });
  }

  return entries;
}

/**
 * Converts a heading string to a URL-safe slug ID.
 * Matches the default behavior of rehype-slug.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}
