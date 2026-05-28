import Image from "next/image";
import type { Article } from "@/types/article";
import { ArticleCategoryBadges } from "@/components/shared/CategoryBadge";
import ReadingTime from "@/components/shared/ReadingTime";

interface ArticleHeaderProps {
  article: Article;
}

export default function ArticleHeader({ article }: ArticleHeaderProps) {
  const isBlogIntro = article.slug === "introduction-to-our-blog";

  return (
    <header className="mb-10">
      <div className="flex flex-wrap items-center gap-3 mb-5">
        {!isBlogIntro && <ArticleCategoryBadges article={article} size="md" />}
        <ReadingTime minutes={article.readingTime} showIcon />
      </div>

      <h1 className="font-serif text-display-md text-ink leading-tight mb-4 text-balance">
        {article.title}
      </h1>

      <p className="font-serif text-body-lg text-muted italic mb-7 text-pretty">
        {article.subtitle}
      </p>

      {!isBlogIntro && (
        <div className="flex items-center gap-4 pb-7 border-b border-border">
          <div>
            <p className="font-sans text-[0.8125rem] text-ink font-semibold leading-tight">
              {article.author.name}
            </p>
            {article.author.role && (
              <p className="font-sans text-label-sm text-subtle leading-tight mt-0.5">
                {article.author.role}
              </p>
            )}
          </div>
          <div className="w-px h-7 bg-border" />
          <time
            dateTime={article.publishedAt}
            className="font-sans text-label-sm text-subtle"
          >
            {new Date(article.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          {article.updatedAt && (
            <>
              <span className="font-sans text-label-sm text-subtle">·</span>
              <time
                dateTime={article.updatedAt}
                className="font-sans text-label-sm text-subtle"
              >
                Updated{" "}
                {new Date(article.updatedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </>
          )}
        </div>
      )}

      {article.heroImage && (
        <div className="mt-8 relative aspect-[16/9] overflow-hidden bg-surface">
          <Image
            src={article.heroImage.src}
            alt={article.heroImage.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 65vw, 800px"
            priority
          />
          {article.heroImage.credit && (
            <p className="absolute bottom-2 right-3 font-sans text-[0.65rem] text-white/70">
              {article.heroImage.credit}
            </p>
          )}
        </div>
      )}
    </header>
  );
}
