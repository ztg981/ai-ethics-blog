import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Article, ArticleFrontmatter } from "@/types/article";
import { computeReadingTime } from "./reading-time";
import { extractTableOfContents } from "./toc";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

/**
 * Read and parse a single MDX file, returning the full Article object
 * with computed readingTime and tableOfContents.
 */
export function getArticleBySlug(slug: string): { article: Article; content: string } | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as ArticleFrontmatter;

  if (frontmatter.status === "draft" && process.env.NODE_ENV === "production") {
    return null;
  }

  const article: Article = {
    ...frontmatter,
    slug,
    readingTime: computeReadingTime(content),
    tableOfContents: extractTableOfContents(content),
  };

  return { article, content };
}

/**
 * Returns all published articles sorted by publishedAt descending.
 * In development, drafts are included. In production, drafts are excluded.
 */
export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));

  const articles: Article[] = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const result = getArticleBySlug(slug);
      return result?.article ?? null;
    })
    .filter((a): a is Article => a !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return articles;
}

/**
 * Returns the first article marked as featured: true.
 * Falls back to the most recent article if none are featured.
 */
export function getFeaturedArticle(): Article | null {
  const articles = getAllArticles();
  return articles.find((a) => a.featured) ?? articles[0] ?? null;
}

/**
 * Returns articles in the same category, excluding the current slug,
 * limited to `limit` results.
 */
export function getRelatedArticles(slug: string, category: string, limit = 3): Article[] {
  return getAllArticles()
    .filter((a) => a.slug !== slug && a.category === category)
    .slice(0, limit);
}

/**
 * Returns all unique slugs — used by generateStaticParams().
 */
export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/**
 * Returns articles by category slug, sorted by date descending.
 */
export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}
