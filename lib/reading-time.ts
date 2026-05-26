const WORDS_PER_MINUTE = 220;

/**
 * Estimates reading time from raw MDX/markdown content (including frontmatter stripped).
 * Returns minutes rounded up, minimum 1.
 */
export function computeReadingTime(content: string): number {
  // Strip MDX/markdown syntax for a cleaner word count
  const stripped = content
    .replace(/```[\s\S]*?```/g, "") // code blocks
    .replace(/`[^`]*`/g, "") // inline code
    .replace(/!\[.*?\]\(.*?\)/g, "") // images
    .replace(/\[.*?\]\(.*?\)/g, "$1") // links → keep text
    .replace(/#{1,6}\s/g, "") // headings
    .replace(/[*_~]/g, "") // bold/italic/strike
    .replace(/---[\s\S]*?---/g, "") // frontmatter (if any remains)
    .replace(/\s+/g, " ")
    .trim();

  const wordCount = stripped.split(" ").filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}
