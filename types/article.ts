export type CategorySlug =
  | "ai-research"
  | "ethics"
  | "ai-economy"
  | "ai-biology";

export interface AuthorLinks {
  twitter?: string;
  linkedin?: string;
  website?: string;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  links: AuthorLinks;
}

export interface ImageMeta {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit?: string;
}

export interface TOCEntry {
  id: string;
  text: string;
  level: 2 | 3;
}

/**
 * The full Article type, including fields computed at build time
 * (readingTime, tableOfContents) that are not stored in frontmatter.
 */
export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  author: Author;
  publishedAt: string; // ISO 8601 e.g. "2024-03-15"
  updatedAt?: string;
  category: CategorySlug;
  additionalCategories?: CategorySlug[];
  tags: string[];
  featured: boolean;
  heroImage: ImageMeta;
  excerpt: string;
  readingTime: number; // computed — minutes
  tableOfContents: TOCEntry[]; // computed
  status: "published" | "draft";
}

/**
 * Raw frontmatter shape as it appears in .mdx files.
 * readingTime and tableOfContents are absent — they are derived at build time.
 */
export type ArticleFrontmatter = Omit<Article, "readingTime" | "tableOfContents">;
