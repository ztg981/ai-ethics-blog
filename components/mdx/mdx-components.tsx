import type { MDXComponents } from "mdx/types";
import { slugify } from "@/lib/toc";
import Callout from "./Callout";
import Figure from "./Figure";
import PullQuote from "./PullQuote";
import ProteinLevelsFigure from "./ProteinLevelsFigure";
import ProteinFoldWidget from "./ProteinFoldWidget";

/**
 * Custom MDX components map.
 * - Headings get auto-generated IDs for TOC anchor links.
 * - Custom components (Callout, Figure, PullQuote) are available in MDX files.
 */
export function getMDXComponents(): MDXComponents {
  function makeHeading(Tag: "h2" | "h3" | "h4") {
    return function Heading({
      children,
      ...props
    }: React.HTMLAttributes<HTMLHeadingElement>) {
      const text = typeof children === "string" ? children : "";
      const id = props.id ?? slugify(text);
      return (
        <Tag id={id} {...props}>
          {children}
        </Tag>
      );
    };
  }

  return {
    h2: makeHeading("h2"),
    h3: makeHeading("h3"),
    h4: makeHeading("h4"),
    // Custom components available in all MDX articles
    Callout,
    Figure,
    PullQuote,
    ProteinLevelsFigure,
    ProteinFoldWidget,
  };
}
