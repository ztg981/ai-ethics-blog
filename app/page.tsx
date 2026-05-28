import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout";
import HeroArticle from "@/components/homepage/HeroArticle";
import ArticleList from "@/components/homepage/ArticleList";
import CategorySidebar from "@/components/homepage/CategorySidebar";
import { getAllArticles, getFeaturedArticle } from "@/lib/articles";

export const metadata: Metadata = {
  title: "AI Ethics Blog — AI, Biology & Bioethics",
  description:
    "Independent writing on AI, technology, and the intersection of ethics.",
};

export default function HomePage() {
  const featuredArticle = getFeaturedArticle();
  const allArticles = getAllArticles();
  // Exclude the featured article from the list below the hero
  const listArticles = featuredArticle
    ? allArticles.filter((a) => a.slug !== featuredArticle.slug)
    : allArticles;

  return (
    <PageWrapper className="py-0">
      {/* Hero */}
      {featuredArticle && <HeroArticle article={featuredArticle} />}

      {/* Two-column section */}
      <div className="py-8">
        <TwoColumnLayout
          main={<ArticleList articles={listArticles} />}
          sidebar={
            <div className="space-y-0">
              <CategorySidebar />
            </div>
          }
        />
      </div>
    </PageWrapper>
  );
}
