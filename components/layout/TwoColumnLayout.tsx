import { ReactNode } from "react";

interface TwoColumnLayoutProps {
  main: ReactNode;
  sidebar: ReactNode;
}

/**
 * Homepage two-column layout: ~65% main / ~35% sidebar.
 * On mobile: stacks to single column, sidebar below main.
 */
export default function TwoColumnLayout({ main, sidebar }: TwoColumnLayoutProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 xl:gap-12 items-start">
      <div className="min-w-0">{main}</div>
      <aside className="lg:sticky lg:top-20">{sidebar}</aside>
    </div>
  );
}
