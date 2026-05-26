import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "Search",
  description: "Search articles on AI Ethics Blog.",
};

export default function SearchPage() {
  return (
    <PageWrapper maxWidth="narrow" className="py-16">
      <h1 className="font-serif text-display-sm text-ink mb-4">Search</h1>
      <p className="font-sans text-body-md text-muted">Coming soon.</p>
    </PageWrapper>
  );
}
