import Link from "next/link";
import type { Article } from "@/types/article";
import CategoryBadge from "@/components/shared/CategoryBadge";
import ReadingTime from "@/components/shared/ReadingTime";

interface RelatedArticlesProps {
  articles: Article[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <div className="mt-14 pt-8 border-t border-border">
      <p className="font-sans text-label-sm font-semibold uppercase tracking-widest text-subtle mb-6">
        Related Articles
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {articles.map((article) => (
          <article key={article.slug} className="border border-border p-5">
            <div className="flex items-center gap-2 mb-2">
              <CategoryBadge category={article.category} />
              <ReadingTime minutes={article.readingTime} />
            </div>
            <Link href={`/articles/${article.slug}`} className="group">
              <h3 className="font-serif text-heading-md text-ink group-hover:text-navy transition-colors leading-snug mb-2">
                {article.title}
              </h3>
            </Link>
            <p className="font-sans text-body-sm text-muted line-clamp-2">
              {article.excerpt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
