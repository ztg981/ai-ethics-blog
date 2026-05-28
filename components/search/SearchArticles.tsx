"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Article } from "@/types/article";
import { ArticleCategoryBadges } from "@/components/shared/CategoryBadge";

interface SearchArticlesProps {
  articles: Article[];
}

export default function SearchArticles({ articles }: SearchArticlesProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return articles;

    return articles.filter((article) => {
      const searchable = [
        article.title,
        article.subtitle,
        article.excerpt,
        article.author.name,
        ...article.tags,
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(normalized);
    });
  }, [articles, query]);

  return (
    <div>
      <form className="mb-10" role="search">
        <label htmlFor="article-search" className="sr-only">
          Search articles
        </label>
        <input
          id="article-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search articles"
          className="w-full border border-border bg-background px-4 py-3 font-sans text-body-md text-ink placeholder:text-subtle focus:border-navy focus:outline-none"
        />
      </form>

      <div className="space-y-7">
        {results.map((article) => {
          const isBlogIntro = article.slug === "introduction-to-our-blog";

          return (
            <article key={article.slug} className="border-b border-border pb-7 last:border-0">
              {!isBlogIntro && (
                <div className="mb-3">
                  <ArticleCategoryBadges article={article} />
                </div>
              )}
              <Link href={`/articles/${article.slug}`} className="group">
                <h2 className="font-serif text-heading-lg text-ink group-hover:text-navy transition-colors">
                  {article.title}
                </h2>
              </Link>
              <p className="mt-2 font-sans text-body-sm text-muted">
                {article.excerpt}
              </p>
            </article>
          );
        })}
      </div>

      {results.length === 0 && (
        <p className="font-sans text-body-md text-muted">
          No articles matched your search.
        </p>
      )}
    </div>
  );
}
