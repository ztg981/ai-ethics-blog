import Link from "next/link";
import { getCategoryBySlug } from "@/lib/categories";
import type { Article, CategorySlug } from "@/types/article";

interface CategoryBadgeProps {
  category: CategorySlug;
  asLink?: boolean;
  size?: "sm" | "md";
}

export default function CategoryBadge({
  category,
  asLink = true,
  size = "sm",
}: CategoryBadgeProps) {
  const cat = getCategoryBySlug(category);
  const sizeClass = size === "sm" ? "text-[0.65rem] px-2 py-0.5" : "text-xs px-2.5 py-1";
  const className = `inline-flex items-center font-sans font-semibold uppercase tracking-widest rounded-sm ${sizeClass} ${cat.color} ${cat.textColor}`;

  if (asLink) {
    return (
      <Link href={`/topics/${category}`} className={className}>
        {cat.label}
      </Link>
    );
  }

  return <span className={className}>{cat.label}</span>;
}

export function ArticleCategoryBadges({
  article,
  size = "sm",
}: {
  article: Article;
  size?: "sm" | "md";
}) {
  const categories = [article.category, ...(article.additionalCategories ?? [])];

  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((category) => (
        <CategoryBadge key={category} category={category} size={size} />
      ))}
    </div>
  );
}
