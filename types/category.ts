import type { CategorySlug } from "./article";

export type { CategorySlug };

export interface Category {
  slug: CategorySlug;
  label: string;
  description: string;
  iconName: string; // lucide-react icon name
  color: string; // Tailwind bg class for badge
  textColor: string; // Tailwind text class for badge
}
