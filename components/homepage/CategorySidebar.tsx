import Link from "next/link";
import { Cpu, Scale } from "lucide-react";
import { CATEGORIES } from "@/lib/categories";

const ICON_MAP: Record<string, React.ElementType> = {
  Cpu,
  Scale,
};

export default function CategorySidebar() {
  return (
    <div className="bg-navy text-white p-5">
      <h2 className="font-sans text-label-sm font-semibold uppercase tracking-widest text-white/60 mb-4">
        Categories
      </h2>
      <ul className="space-y-1">
        {CATEGORIES.map((cat) => {
          const Icon = ICON_MAP[cat.iconName] ?? Cpu;
          return (
            <li key={cat.slug}>
              <Link
                href={`/topics/${cat.slug}`}
                className="flex items-center gap-3 py-2.5 px-1 group text-white/80 hover:text-white transition-colors"
              >
                <Icon
                  size={15}
                  strokeWidth={1.75}
                  className="text-white/50 group-hover:text-white/80 transition-colors shrink-0"
                  aria-hidden="true"
                />
                <span className="font-sans text-[0.875rem] font-medium">{cat.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
