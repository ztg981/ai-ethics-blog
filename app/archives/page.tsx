import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import { getAllArticles } from "@/lib/articles";
import { getCategoryBySlug } from "@/lib/categories";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Archives",
  description: "All articles, ordered chronologically.",
};

function groupByYear(articles: ReturnType<typeof getAllArticles>) {
  const map = new Map<string, typeof articles>();
  for (const article of articles) {
    const year = new Date(article.publishedAt).getFullYear().toString();
    if (!map.has(year)) map.set(year, []);
    map.get(year)!.push(article);
  }
  return map;
}

export default function ArchivesPage() {
  const articles = getAllArticles();
  const grouped = groupByYear(articles);
  const years = Array.from(grouped.keys()).sort((a, b) => Number(b) - Number(a));

  return (
    <PageWrapper maxWidth="narrow" className="py-16">
      <h1 className="font-serif text-display-sm text-ink mb-2">Archives</h1>
      <p className="font-sans text-body-md text-muted mb-12">
        {articles.length} article{articles.length !== 1 ? "s" : ""} published
      </p>

      {years.map((year) => (
        <div key={year} className="mb-12">
          <h2 className="font-serif text-heading-lg text-ink mb-6 pb-3 border-b border-border">
            {year}
          </h2>
          <ul className="space-y-5">
            {grouped.get(year)!.map((article) => {
              const category = getCategoryBySlug(article.category);
              return (
                <li
                  key={article.slug}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4"
                >
                  <time className="font-sans text-label-sm text-subtle tabular-nums shrink-0">
                    {new Date(article.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <div>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="font-serif text-heading-md text-ink hover:text-navy transition-colors"
                    >
                      {article.title}
                    </Link>
                    <span className="ml-2 font-sans text-label-sm text-subtle">
                      {category.label}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      {articles.length === 0 && (
        <p className="font-sans text-body-md text-muted">No articles yet.</p>
      )}
    </PageWrapper>
  );
}
