import { Clock } from "lucide-react";

interface ReadingTimeProps {
  minutes: number;
  showIcon?: boolean;
  className?: string;
}

export default function ReadingTime({
  minutes,
  showIcon = false,
  className = "",
}: ReadingTimeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 font-sans text-label-sm text-subtle ${className}`}
    >
      {showIcon && <Clock size={12} strokeWidth={1.75} aria-hidden="true" />}
      {minutes} min read
    </span>
  );
}
