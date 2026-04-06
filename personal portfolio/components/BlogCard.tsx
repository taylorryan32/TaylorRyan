import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";

type Props = {
  post: BlogPost;
  priority?: boolean;
};

export function BlogCard({ post, priority = false }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-black/6 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={priority}
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-dark shadow-sm backdrop-blur">
          {post.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <time
          dateTime={post.date}
          className="text-xs font-medium uppercase tracking-wider text-neutral-500"
        >
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.readTime}
        </time>
        <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-brand-dark group-hover:text-brand-light transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-neutral-600 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand"
        >
          Read article
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
