const SAVED_KEY = "ai-ethics-blog:saved";

export function getSavedSlugs(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(SAVED_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function saveArticle(slug: string): void {
  const current = getSavedSlugs();
  if (!current.includes(slug)) {
    localStorage.setItem(SAVED_KEY, JSON.stringify([...current, slug]));
  }
}

export function unsaveArticle(slug: string): void {
  const current = getSavedSlugs();
  localStorage.setItem(
    SAVED_KEY,
    JSON.stringify(current.filter((s) => s !== slug))
  );
}

export function isArticleSaved(slug: string): boolean {
  return getSavedSlugs().includes(slug);
}

export function toggleSaved(slug: string): boolean {
  if (isArticleSaved(slug)) {
    unsaveArticle(slug);
    return false;
  } else {
    saveArticle(slug);
    return true;
  }
}
