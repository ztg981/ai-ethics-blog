import type { Author } from "@/types/article";
import { Globe, ExternalLink } from "lucide-react";

interface AuthorBioProps {
  author: Author;
}

export default function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="mt-14 pt-8 border-t border-border">
      <p className="font-sans text-label-sm font-semibold uppercase tracking-widest text-subtle mb-5">
        About the Author
      </p>

      <div className="flex gap-5">
        {/* Avatar placeholder */}
        <div className="w-14 h-14 rounded-full bg-surface border border-border shrink-0 flex items-center justify-center">
          <span className="font-serif text-heading-md text-muted">
            {author.name.charAt(0)}
          </span>
        </div>

        <div>
          <p className="font-serif text-heading-md text-ink font-bold leading-tight">
            {author.name}
          </p>
          <p className="font-sans text-label-sm text-subtle mt-0.5 mb-3">{author.role}</p>
          <p className="font-sans text-body-sm text-muted">{author.bio}</p>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-4">
            {author.links.twitter && (
              <a
                href={`https://x.com/${author.links.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-sans text-label-sm text-subtle hover:text-ink transition-colors"
              >
                <ExternalLink size={13} strokeWidth={1.75} aria-hidden="true" />
                X / Twitter
              </a>
            )}
            {author.links.linkedin && (
              <a
                href={author.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-sans text-label-sm text-subtle hover:text-ink transition-colors"
              >
                <ExternalLink size={13} strokeWidth={1.75} aria-hidden="true" />
                LinkedIn
              </a>
            )}
            {author.links.website && (
              <a
                href={author.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-sans text-label-sm text-subtle hover:text-ink transition-colors"
              >
                <Globe size={13} strokeWidth={1.75} aria-hidden="true" />
                Website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
