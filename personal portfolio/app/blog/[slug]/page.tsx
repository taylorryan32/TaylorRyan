import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogMarkdown } from "@/components/BlogMarkdown";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { blogPosts, getPostBySlug } from "@/data/blog";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Article" };
  }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <header className="bg-brand-dark text-white py-14 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent/90">
              {post.category}
            </p>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-balance leading-tight">
              {post.title}
            </h1>
            <p className="mt-6 text-white/80 leading-relaxed">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>{" "}
              · {post.readTime}
            </p>
          </div>
        </Container>
      </header>

      <div className="relative aspect-[21/9] max-h-[420px] w-full">
        <Image
          src={post.image}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <Container className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <BlogMarkdown content={post.content} />
          <div className="mt-14 rounded-2xl border border-black/6 bg-white p-8 shadow-card">
            <h2 className="font-display text-xl font-bold text-brand-dark">
              Want help applying this on the court?
            </h2>
            <p className="mt-2 text-neutral-600 leading-relaxed">
              Book a private lesson and we&apos;ll build a personalized plan—mechanics, strategy,
              and drills matched to your goals.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Book a Lesson</ButtonLink>
              <ButtonLink href="/blog" variant="secondary">
                More articles
              </ButtonLink>
            </div>
          </div>
          <p className="mt-10">
            <Link
              href="/blog"
              className="text-sm font-semibold text-brand hover:text-brand-light transition-colors"
            >
              ← Back to blog
            </Link>
          </p>
        </div>
      </Container>
    </article>
  );
}
