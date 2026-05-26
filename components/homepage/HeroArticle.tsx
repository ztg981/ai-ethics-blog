import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/types/article";
import CategoryBadge from "@/components/shared/CategoryBadge";

interface HeroArticleProps {
  article: Article;
}

export default function HeroArticle({ article }: HeroArticleProps) {
  return (
    <article className="py-10 border-b border-border">
      {/* Label */}
      <p className="font-sans text-label-sm font-semibold uppercase tracking-widest text-navy mb-5">
        Featured Research
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-start">
        {/* Text */}
        <div className="flex flex-col">
          <Link href={`/articles/${article.slug}`} className="group">
            <h1 className="font-serif text-display-md text-ink leading-tight group-hover:text-navy transition-colors text-balance mb-4">
              {article.title}
            </h1>
          </Link>

          <p className="font-sans text-body-md text-muted leading-relaxed mb-6 max-w-prose text-pretty">
            {article.excerpt}
          </p>

          {/* Meta row */}
          <div className="flex items-center gap-3 mt-auto">
            <CategoryBadge category={article.category} />
            <span className="text-border">|</span>
            <span className="font-sans text-label-sm text-subtle">
              By{" "}
              <span className="font-semibold text-muted">{article.author.name}</span>
            </span>
            <span className="text-border hidden sm:inline">|</span>
            <time
              dateTime={article.publishedAt}
              className="hidden sm:inline font-sans text-label-sm text-subtle"
            >
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
        </div>

        {/* Image */}
        <Link
          href={`/articles/${article.slug}`}
          className="block overflow-hidden bg-surface aspect-[16/10] lg:aspect-auto lg:h-[280px] relative"
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={article.heroImage.src}
            alt={article.heroImage.alt}
            fill
            className="object-cover hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 420px"
            priority
          />
        </Link>
      </div>
    </article>
  );
}
