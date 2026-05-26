import Link from "next/link";
import type { Article } from "@/types/article";
import CategoryBadge from "@/components/shared/CategoryBadge";
import ReadingTime from "@/components/shared/ReadingTime";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "compact";
}

export default function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  if (variant === "compact") {
    return (
      <article className="py-3 border-b border-border last:border-0">
        <Link href={`/articles/${article.slug}`} className="group">
          <h3 className="font-serif text-heading-sm text-ink group-hover:text-navy transition-colors leading-snug">
            {article.title}
          </h3>
        </Link>
        <p className="mt-1 font-sans text-label-sm text-subtle">
          {new Date(article.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </article>
    );
  }

  return (
    <article className="py-7 border-b border-border last:border-0">
      {/* Top meta row */}
      <div className="flex items-center gap-3 mb-3">
        <CategoryBadge category={article.category} />
        <ReadingTime minutes={article.readingTime} />
      </div>

      {/* Title */}
      <Link href={`/articles/${article.slug}`} className="group">
        <h2 className="font-serif text-heading-lg text-ink group-hover:text-navy transition-colors leading-snug mb-2 text-balance">
          {article.title}
        </h2>
      </Link>

      {/* Excerpt */}
      <p className="font-sans text-body-sm text-muted line-clamp-2 mb-4">
        {article.excerpt}
      </p>

      {/* Author + date */}
      <p className="font-sans text-label-sm text-subtle">
        By{" "}
        <span className="font-semibold text-muted">{article.author.name}</span>
        {" · "}
        <time dateTime={article.publishedAt}>
          {new Date(article.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
      </p>
    </article>
  );
}
