import { ReactNode } from "react";
import { Info, AlertTriangle, Lightbulb, Quote } from "lucide-react";

type CalloutType = "info" | "warning" | "insight" | "quote";

interface CalloutProps {
  type?: CalloutType;
  children: ReactNode;
  title?: string;
}

const STYLES: Record<
  CalloutType,
  { bg: string; border: string; icon: React.ElementType; iconColor: string }
> = {
  info: {
    bg: "bg-blue-50",
    border: "border-blue-300",
    icon: Info,
    iconColor: "text-blue-600",
  },
  warning: {
    bg: "bg-amber-50",
    border: "border-amber-300",
    icon: AlertTriangle,
    iconColor: "text-amber-600",
  },
  insight: {
    bg: "bg-navy/5",
    border: "border-navy/30",
    icon: Lightbulb,
    iconColor: "text-navy",
  },
  quote: {
    bg: "bg-surface",
    border: "border-border",
    icon: Quote,
    iconColor: "text-muted",
  },
};

export default function Callout({ type = "info", title, children }: CalloutProps) {
  const { bg, border, icon: Icon, iconColor } = STYLES[type];

  return (
    <aside
      className={`my-8 border-l-4 ${border} ${bg} px-5 py-4 rounded-r-sm not-prose`}
      role="note"
    >
      <div className="flex items-start gap-3">
        <Icon
          size={18}
          strokeWidth={1.75}
          className={`${iconColor} shrink-0 mt-0.5`}
          aria-hidden="true"
        />
        <div>
          {title && (
            <p className="font-sans text-[0.8125rem] font-semibold uppercase tracking-wide text-ink mb-1">
              {title}
            </p>
          )}
          <div className="font-sans text-body-sm text-muted [&>p]:mb-0 [&>p]:leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}
