import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  maxWidth?: "standard" | "wide" | "narrow";
  className?: string;
}

const maxWidthMap = {
  standard: "max-w-content",
  wide: "max-w-article",
  narrow: "max-w-3xl",
};

export default function PageWrapper({
  children,
  maxWidth = "standard",
  className = "",
}: PageWrapperProps) {
  return (
    <div
      className={`${maxWidthMap[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
