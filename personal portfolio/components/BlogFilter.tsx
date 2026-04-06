"use client";

import { useMemo, useState } from "react";
import type { BlogCategory, BlogPost } from "@/data/blog";
import { blogCategories } from "@/data/blog";
import { BlogCard } from "./BlogCard";

type Props = {
  posts: BlogPost[];
};

export function BlogFilter({ posts }: Props) {
  const [category, setCategory] = useState<BlogCategory | "All">("All");

  const filtered = useMemo(() => {
    if (category === "All") return posts;
    return posts.filter((p) => p.category === category);
  }, [posts, category]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 justify-center sm:justify-start"
        role="group"
        aria-label="Filter articles by category"
      >
        <button
          type="button"
          onClick={() => setCategory("All")}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
            category === "All"
              ? "bg-brand text-white shadow-md"
              : "bg-white border border-black/10 text-neutral-600 hover:border-brand/30 hover:text-brand"
          }`}
        >
          All
        </button>
        {blogCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              category === c
                ? "bg-brand text-white shadow-md"
                : "bg-white border border-black/10 text-neutral-600 hover:border-brand/30 hover:text-brand"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="mt-6 text-sm text-neutral-500" aria-live="polite">
        Showing {filtered.length} article{filtered.length === 1 ? "" : "s"}
        {category !== "All" ? ` in ${category}` : ""}.
      </p>
      <ul className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 list-none p-0">
        {filtered.map((post) => (
          <li key={post.slug}>
            <BlogCard post={post} />
          </li>
        ))}
      </ul>
      {filtered.length === 0 ? (
        <p className="mt-8 text-center text-neutral-600">No posts in this category yet.</p>
      ) : null}
    </div>
  );
}
