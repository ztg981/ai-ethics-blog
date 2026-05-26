import type { Category, CategorySlug } from "@/types/category";

export const CATEGORIES: Category[] = [
  {
    slug: "genomics",
    label: "Genomics",
    description:
      "Sequencing, genome editing, and the computational tools reshaping our understanding of DNA.",
    iconName: "Dna",
    color: "bg-emerald-100",
    textColor: "text-emerald-800",
  },
  {
    slug: "neuroscience",
    label: "Neuroscience",
    description:
      "Brain-computer interfaces, neural mapping, and the ethics of cognitive enhancement.",
    iconName: "Brain",
    color: "bg-purple-100",
    textColor: "text-purple-800",
  },
  {
    slug: "synthetic-bio",
    label: "Synthetic Bio",
    description:
      "Engineering living systems — from protein design to synthetic genomes and biocomputing.",
    iconName: "FlaskConical",
    color: "bg-orange-100",
    textColor: "text-orange-800",
  },
  {
    slug: "ai-research",
    label: "AI Research",
    description:
      "Foundational AI advances with direct biological applications — from AlphaFold to generative models.",
    iconName: "Cpu",
    color: "bg-blue-100",
    textColor: "text-blue-800",
  },
  {
    slug: "ethics",
    label: "Ethics",
    description:
      "The moral, societal, and policy questions raised by accelerating biological AI.",
    iconName: "Scale",
    color: "bg-rose-100",
    textColor: "text-rose-800",
  },
];

export const CATEGORY_MAP: Record<CategorySlug, Category> = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c])
) as Record<CategorySlug, Category>;

export function getCategoryBySlug(slug: CategorySlug): Category {
  return CATEGORY_MAP[slug];
}
