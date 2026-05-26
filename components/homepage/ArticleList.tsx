import type { Article } from "@/types/article";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  if (articles.length === 0) {
    return (
      <p className="font-sans text-body-md text-muted py-10">
        No articles yet. Check back soon.
      </p>
    );
  }

  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
}
