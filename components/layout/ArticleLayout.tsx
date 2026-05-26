import { ReactNode } from "react";

interface ArticleLayoutProps {
  content: ReactNode;
  toc: ReactNode;
}

/**
 * Article page two-column layout: ~68% content / ~32% sticky TOC.
 * On mobile: TOC is hidden (handled by the TOC component itself).
 */
export default function ArticleLayout({ content, toc }: ArticleLayoutProps) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_256px] gap-10 xl:gap-16 items-start">
      <div className="min-w-0 max-w-prose">{content}</div>
      <aside className="hidden xl:block xl:sticky xl:top-24">{toc}</aside>
    </div>
  );
}
