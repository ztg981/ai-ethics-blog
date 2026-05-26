import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1a237e",
          dark: "#0d1257",
          light: "#283593",
        },
        ink: "#111111",
        muted: "#6b7280",
        subtle: "#9ca3af",
        border: "#e5e3de",
        surface: "#f5f3ef",
        background: "#faf9f7",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["3.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "heading-md": ["1.25rem", { lineHeight: "1.35" }],
        "heading-sm": ["1.125rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.65" }],
        "label-md": ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.05em" }],
        "label-sm": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.06em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      maxWidth: {
        "content": "72rem",
        "prose": "68ch",
        "article": "78rem",
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        blog: {
          css: {
            "--tw-prose-body": theme("colors.ink"),
            "--tw-prose-headings": theme("colors.ink"),
            "--tw-prose-lead": theme("colors.muted"),
            "--tw-prose-links": theme("colors.navy.DEFAULT"),
            "--tw-prose-bold": theme("colors.ink"),
            "--tw-prose-counters": theme("colors.muted"),
            "--tw-prose-bullets": theme("colors.border"),
            "--tw-prose-hr": theme("colors.border"),
            "--tw-prose-quotes": theme("colors.ink"),
            "--tw-prose-quote-borders": theme("colors.navy.DEFAULT"),
            "--tw-prose-captions": theme("colors.muted"),
            "--tw-prose-code": theme("colors.ink"),
            "--tw-prose-pre-code": "#e2e8f0",
            "--tw-prose-pre-bg": "#1e293b",
            "--tw-prose-th-borders": theme("colors.border"),
            "--tw-prose-td-borders": theme("colors.border"),
            maxWidth: "none",
            fontSize: "1.0625rem",
            lineHeight: "1.8",
            "h1, h2, h3, h4": {
              fontFamily: theme("fontFamily.serif"),
              fontWeight: "700",
            },
            h2: {
              fontSize: "1.625rem",
              marginTop: "2.5rem",
              marginBottom: "1rem",
            },
            h3: {
              fontSize: "1.25rem",
              marginTop: "2rem",
              marginBottom: "0.75rem",
            },
            p: {
              marginBottom: "1.5rem",
            },
            a: {
              textDecorationColor: theme("colors.navy.DEFAULT"),
              textUnderlineOffset: "3px",
              "&:hover": {
                color: theme("colors.navy.dark"),
              },
            },
            blockquote: {
              fontStyle: "normal",
              fontFamily: theme("fontFamily.serif"),
              fontSize: "1.2rem",
              lineHeight: "1.6",
              borderLeftWidth: "3px",
              borderLeftColor: theme("colors.navy.DEFAULT"),
              paddingLeft: "1.5rem",
              color: theme("colors.ink"),
            },
            "blockquote p:first-of-type::before": { content: '""' },
            "blockquote p:last-of-type::after": { content: '""' },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            code: {
              fontWeight: "500",
              backgroundColor: theme("colors.surface"),
              padding: "0.15em 0.35em",
              borderRadius: "0.25rem",
              fontSize: "0.9em",
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
