import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import ArticleList from "@/components/homepage/ArticleList";
import { CATEGORIES } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/articles";
import type { CategorySlug } from "@/types/article";

interface CategoryPageProps {
  params: { category: string };
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const cat = CATEGORIES.find((c) => c.slug === params.category);
  if (!cat) return {};
  return {
    title: cat.label,
    description: cat.description,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const cat = CATEGORIES.find((c) => c.slug === params.category);
  if (!cat) notFound();

  const articles = getArticlesByCategory(params.category as CategorySlug);

  return (
    <>
      {/* Header band */}
      <div className="bg-navy text-white">
        <PageWrapper className="py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 font-sans text-label-sm text-white/50 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight size={12} strokeWidth={2} aria-hidden="true" />
            <Link href="/topics" className="hover:text-white/80 transition-colors">Topics</Link>
            <ChevronRight size={12} strokeWidth={2} aria-hidden="true" />
            <span className="text-white/80">{cat.label}</span>
          </nav>

          <h1 className="font-serif text-display-sm text-white mb-3">{cat.label}</h1>
          <p className="font-sans text-body-md text-white/70 max-w-prose">
            {cat.description}
          </p>
          <p className="font-sans text-label-sm text-white/40 mt-4">
            {articles.length} article{articles.length !== 1 ? "s" : ""}
          </p>
        </PageWrapper>
      </div>

      {/* Article list */}
      <PageWrapper maxWidth="narrow" className="py-12">
        <ArticleList articles={articles} />
        {articles.length === 0 && (
          <div className="py-16 text-center">
            <p className="font-sans text-body-md text-muted mb-6">
              No articles in this category yet.
            </p>
            <Link
              href="/"
              className="font-sans text-sm font-medium text-navy border border-navy px-4 py-2 hover:bg-navy hover:text-white transition-colors"
            >
              Back to homepage
            </Link>
          </div>
        )}
      </PageWrapper>
    </>
  );
}
