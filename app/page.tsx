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

      <section className="border-b border-border py-8">
        <div className="max-w-3xl space-y-4 font-sans text-body-md text-muted leading-relaxed">
          <p>
            Welcome to our Artificial Intelligence Ethics Blog. We are a student-run
            organization made up of concerned students who aim to raise awareness about
            the ethics and concerns around AI development and how it will reshape our
            world, for better or for worse.
          </p>
          <p>
            As AI continues to become more powerful and normalized in society, we
            believe it is important for students to understand not only how these
            technologies work but also how they will impact our world by changing
            education, the economy, jobs, the way we think, and more.
          </p>
          <p>
            We hope to inspire more critical thinking about how AI should be regulated
            and encourage people to speak up against the actions of profit-driven
            companies and industries that prioritize growth over public stability. We
            hope that by making this blog public and accessible to everyone, we will
            give more people a place to learn and safely discuss these topics.
          </p>
          <p>
            We believe it is important for students to have a voice in these
            discussions, as their voice is powerful in shaping our future.
          </p>
        </div>
      </section>

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
