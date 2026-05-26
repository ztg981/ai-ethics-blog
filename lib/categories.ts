import type { Category, CategorySlug } from "@/types/category";

export const CATEGORIES: Category[] = [
  {
    slug: "ai-research",
    label: "AI Research",
    description:
      "Foundational AI advances, from AlphaFold to generative models.",
    iconName: "Cpu",
    color: "bg-blue-100",
    textColor: "text-blue-800",
  },
  {
    slug: "ethics",
    label: "Ethics",
    description:
      "The moral, societal, and policy questions raised by accelerating AI.",
    iconName: "Scale",
    color: "bg-rose-100",
    textColor: "text-rose-800",
  },
  {
    slug: "ai-economy",
    label: "AI in Economy",
    description:
      "How AI changes markets, labor, productivity, and economic power.",
    iconName: "Cpu",
    color: "bg-amber-100",
    textColor: "text-amber-800",
  },
  {
    slug: "ai-biology",
    label: "AI in Biology",
    description:
      "AI systems used to understand proteins, cells, disease, and biological research.",
    iconName: "Cpu",
    color: "bg-emerald-100",
    textColor: "text-emerald-800",
  },
];

export const CATEGORY_MAP: Record<CategorySlug, Category> = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c])
) as Record<CategorySlug, Category>;

export function getCategoryBySlug(slug: CategorySlug): Category {
  return CATEGORY_MAP[slug];
}
