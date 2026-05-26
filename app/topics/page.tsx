import type { Metadata } from "next";
import Link from "next/link";
import { Dna, Brain, FlaskConical, Cpu, Scale } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { CATEGORIES } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Topics",
  description: "Explore articles by topic — Genomics, Neuroscience, Synthetic Bio, AI Research, and Ethics.",
};

const ICON_MAP: Record<string, React.ElementType> = {
  Dna, Brain, FlaskConical, Cpu, Scale,
};

export default function TopicsPage() {
  return (
    <PageWrapper className="py-16">
      <h1 className="font-serif text-display-sm text-ink mb-2">Topics</h1>
      <p className="font-sans text-body-md text-muted mb-12">
        Browse articles by subject area.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CATEGORIES.map((cat) => {
          const Icon = ICON_MAP[cat.iconName] ?? Cpu;
          const count = getArticlesByCategory(cat.slug).length;

          return (
            <Link
              key={cat.slug}
              href={`/topics/${cat.slug}`}
              className="group border border-border p-6 hover:border-navy transition-colors"
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-sm mb-4 ${cat.color}`}>
                <Icon size={20} strokeWidth={1.75} className={cat.textColor} aria-hidden="true" />
              </div>
              <h2 className="font-serif text-heading-lg text-ink group-hover:text-navy transition-colors mb-2">
                {cat.label}
              </h2>
              <p className="font-sans text-body-sm text-muted mb-4 line-clamp-2">
                {cat.description}
              </p>
              <p className="font-sans text-label-sm text-subtle">
                {count} article{count !== 1 ? "s" : ""}
              </p>
            </Link>
          );
        })}
      </div>
    </PageWrapper>
  );
}
