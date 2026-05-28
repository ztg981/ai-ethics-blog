import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "About",
  description: "About AI Ethics Blog — our mission and editorial approach.",
};

export default function AboutPage() {
  return (
    <PageWrapper maxWidth="narrow" className="py-16">
      <h1 className="font-serif text-display-sm text-ink mb-4">About</h1>
      <div className="space-y-5 font-sans text-body-lg text-muted leading-relaxed">
        <p>
          Welcome to our Artificial Intelligence Ethics Blog! We are a student-run
          organization made up of concerned students who aim to raise awareness about
          the ethics and concerns around AI development and how it will reshape our
          world, for better or for worse.
        </p>
        <p>
          As AI continues to become more powerful and normalized in society, we
          believe it is important for students to understand not only how these
          technologies work but also how they will impact our world by changing
          education, the economy, jobs, the way we think, and more.
        </p>
        <p>
          We hope to inspire more critical thinking about how AI should be regulated
          and encourage people to speak up against the actions of profit-driven
          companies and industries that prioritize growth over public stability. We
          hope that by making this blog public and accessible to everyone, we will
          give more people a place to learn and safely discuss these topics. We
          believe it is important for students to have a voice in these discussions,
          as their voice is powerful in shaping our future.
        </p>
      </div>
    </PageWrapper>
  );
}
