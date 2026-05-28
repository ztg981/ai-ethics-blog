import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import PageWrapper from "@/components/layout/PageWrapper";
import ArticleLayout from "@/components/layout/ArticleLayout";
import ArticleHeader from "@/components/article/ArticleHeader";
import AuthorBio from "@/components/article/AuthorBio";
import RelatedArticles from "@/components/article/RelatedArticles";
import ShareBar from "@/components/article/ShareBar";
import TableOfContents from "@/components/article/TableOfContents";
import ReadingProgress from "@/components/article/ReadingProgress";
import { getArticleBySlug, getAllArticleSlugs, getRelatedArticles } from "@/lib/articles";
import { getMDXComponents } from "@/components/mdx/mdx-components";

interface ArticlePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const result = getArticleBySlug(params.slug);
  if (!result) return {};

  const { article } = result;
  const openGraphImages = article.heroImage
    ? [
        {
          url: article.heroImage.src,
          width: article.heroImage.width,
          height: article.heroImage.height,
          alt: article.heroImage.alt,
        },
      ]
    : undefined;

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      images: openGraphImages,
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const result = getArticleBySlug(params.slug);
  if (!result) notFound();

  const { article, content } = result;
  const isBlogIntro = article.slug === "introduction-to-our-blog";
  const relatedArticles = getRelatedArticles(article.slug, article.category, 2);
  const articleUrl = `https://aiethicsblog.com/articles/${article.slug}`;

  return (
    <>
      <ReadingProgress />
      <PageWrapper maxWidth="wide" className="pt-10 pb-20">
        <ArticleLayout
          content={
            <article>
              <ArticleHeader article={article} />

              {/* MDX Body */}
              <div className="prose prose-blog max-w-none">
                <MDXRemote
                  source={content}
                  components={getMDXComponents()}
                />
              </div>

              <ShareBar url={articleUrl} title={article.title} />
              {!isBlogIntro && <AuthorBio author={article.author} />}
              <RelatedArticles articles={relatedArticles} />
            </article>
          }
          toc={<TableOfContents headings={article.tableOfContents} />}
        />
      </PageWrapper>
    </>
  );
}
