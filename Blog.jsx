import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PUBLICATION_URL = "https://neoves.substack.com";

const posts = [
  {
    issue: "Issue 01",
    date: "Aug 16, 2026",
    title: "Start Codon",
    dek:
      "Why microRNAs are the lever we're pulling for nerve repair. The peripheral nervous system sits behind a leakier barrier than the brain — the same exposure that makes it vulnerable to neuropathy is what makes it reachable.",
    body:
      "From a 1993 roundworm gene that broke the central dogma to the 2024 Nobel, and the case for treating neuropathy as a multi-pathway problem rather than a pain-management one.",
    topics: ["miR-124", "Polypharmacology", "Peripheral nerve repair"],
    href: "https://neoves.substack.com/p/01-start-codon",
  },
];

const Blog = () => {
  const post = posts[0];

  return (
    <section
      id="blog"
      data-testid="blog-section"
      className="relative bg-white dark:bg-black border-t border-black/5 dark:border-white/10 py-24 md:py-28"
    >
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">Blog</span>
          <h2 className="heading-md mt-5 text-neoves-black dark:text-white">
            Documenting the science as it happens.
          </h2>
          <p className="mt-6 text-neoves-black/80 dark:text-white/80 leading-relaxed text-lg">
            Long-form notes on what we're building, the reasoning behind it, and
            what the evidence actually supports — written as the work unfolds.
          </p>
        </div>

        <motion.article
          data-testid="blog-post-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="group mt-12 rounded-3xl border border-black/8 dark:border-white/10 bg-neoves-gray dark:bg-neutral-900 p-8 md:p-10 hover:border-neoves-blue/30 dark:hover:border-neoves-blue/30 hover:shadow-[0_10px_40px_-20px_rgba(90,114,240,0.4)] transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-neoves-blue font-semibold">
                {post.issue} · {post.date}
              </p>

              <h3 className="mt-4 font-display text-2xl md:text-3xl font-semibold tracking-tight text-neoves-black dark:text-white">
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neoves-blue transition-colors"
                >
                  {post.title}
                </a>
              </h3>

              <p className="mt-4 text-neoves-black/80 dark:text-white/80 leading-relaxed text-lg">
                {post.dek}
              </p>
              <p className="mt-3 text-neoves-black/70 dark:text-white/70 leading-relaxed">
                {post.body}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {post.topics.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-black/10 dark:border-white/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-neoves-black/60 dark:text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end lg:items-end gap-3 lg:border-l lg:border-black/8 lg:dark:border-white/10 lg:pl-10">
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="blog-cta-read"
                className="pill-btn-primary w-full sm:w-auto justify-center"
              >
                Read on Substack
                <ArrowUpRight size={16} />
              </a>
              <a
                href={PUBLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="blog-cta-all"
                className="pill-btn-ghost w-full sm:w-auto justify-center dark:border-white/30 dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                All posts
              </a>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Blog;
