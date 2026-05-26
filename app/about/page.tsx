import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "About",
  description: "About AI Ethics Blog — our mission and editorial approach.",
};

export default function AboutPage() {
  return (
    <PageWrapper maxWidth="narrow" className="py-16">
      <h1 className="font-serif text-display-sm text-ink mb-4">About</h1>
      <p className="font-sans text-body-lg text-muted">Coming soon.</p>
    </PageWrapper>
  );
}
