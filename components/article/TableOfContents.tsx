"use client";

import { useEffect, useState } from "react";
import type { TOCEntry } from "@/types/article";

interface TableOfContentsProps {
  headings: TOCEntry[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible heading
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents">
      <p className="font-sans text-label-sm font-semibold uppercase tracking-widest text-subtle mb-4">
        Contents
      </p>
      <ol className="space-y-1">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <li
              key={heading.id}
              className={heading.level === 3 ? "pl-3" : ""}
            >
              <a
                href={`#${heading.id}`}
                className={`block font-sans text-[0.8125rem] leading-snug py-1 border-l-2 pl-3 transition-all duration-150 ${
                  isActive
                    ? "border-navy text-navy font-medium"
                    : "border-transparent text-muted hover:text-ink hover:border-border"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
