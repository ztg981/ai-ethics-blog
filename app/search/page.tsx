import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import SearchArticles from "@/components/search/SearchArticles";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Search",
  description: "Search articles on AI Ethics Blog.",
};

export default function SearchPage() {
  const articles = getAllArticles();

  return (
    <PageWrapper maxWidth="narrow" className="py-16">
      <h1 className="font-serif text-display-sm text-ink mb-4">Search</h1>
      <SearchArticles articles={articles} />
    </PageWrapper>
  );
}
