"use client";

import { useState } from "react";
import { Copy, Check, X } from "lucide-react";

interface ShareBarProps {
  url: string;
  title: string;
}

export default function ShareBar({ url, title }: ShareBarProps) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: no-op
    }
  }

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;

  return (
    <div className="mt-10 pt-8 border-t border-border flex items-center gap-4">
      <span className="font-sans text-label-sm text-subtle uppercase tracking-widest">
        Share
      </span>

      <button
        onClick={copyLink}
        className="flex items-center gap-1.5 font-sans text-label-sm text-muted hover:text-ink transition-colors"
        aria-label="Copy article link"
      >
        {copied ? (
          <Check size={14} strokeWidth={2} className="text-navy" />
        ) : (
          <Copy size={14} strokeWidth={1.75} />
        )}
        {copied ? "Copied" : "Copy link"}
      </button>

      <a
        href={tweetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 font-sans text-label-sm text-muted hover:text-ink transition-colors"
        aria-label="Share on Twitter"
      >
        <X size={14} strokeWidth={1.75} />
        X / Twitter
      </a>
    </div>
  );
}
