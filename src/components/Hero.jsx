import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Quote as QuoteIcon } from "lucide-react";
import { NeovesLogo } from "./NeovesLogo";
import NeuralCanvas from "./NeuralCanvas";
import GradientBackground from "./GradientBackground";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-black pt-28 pb-20 md:pt-36"
    >
      <GradientBackground intensity="strong" />
      <NeuralCanvas className="absolute inset-0 w-full h-full opacity-90 dark:opacity-50" />
      <div className="absolute inset-0 bg-dots dark:bg-dots-dark opacity-[0.35] pointer-events-none" />

      <div className="container-x relative z-10">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <NeovesLogo
            className="h-28 sm:h-32 md:h-36 w-auto"
            variant={theme === "dark" ? "light" : "dark"}
          />
        </motion.div>

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="eyebrow justify-center">Stem-cell biotech · Research</span>

          {/* Smaller heading */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.05] text-neoves-black dark:text-white mt-5">
            Engineering better outcomes for{" "}
            <span className="relative inline-block">
              <span className="relative z-10">neuropathy</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="8"
                viewBox="0 0 300 8"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 4 C 80 0 160 8 298 3"
                  stroke="#5A72F0"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            through stem cell research.
          </h1>

          {/* Quote inserted here */}
          <div className="mt-8 max-w-2xl mx-auto">
            <QuoteIcon className="mx-auto mb-3 text-neoves-blue" size={24} />
            <blockquote className="font-serif text-base sm:text-lg md:text-xl italic leading-relaxed text-neoves-black/80 dark:text-white/80">
              “We've been wrong about what our job is in medicine. We think our job is to ensure health and survival. But really it is larger than that. It is to enable{" "}
              <span className="text-neoves-blue not-italic font-semibold">well-being</span>.”
            </blockquote>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neoves-black/50 dark:text-white/50">
              — Atul Gawande
            </p>
          </div>

          <p className="mt-8 text-base sm:text-lg text-neoves-black/80 dark:text-white/80 max-w-2xl mx-auto leading-relaxed">
            Cancer and neurological diseases often cause nerve damage that significantly affects
            quality of life. Neoves researches innovative stem-cell-based approaches to restore
            function and improve well-being.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#research"
              data-testid="hero-cta-research"
              className="pill-btn-primary group"
            >
              <FlaskConical size={16} />
              Learn about our research
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a href="#contact" data-testid="hero-cta-contact" className="pill-btn-ghost dark:border-white/30 dark:text-white dark:hover:bg-white dark:hover:text-black">
              Contact us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-16 sm:mt-20"
        >
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-neoves-black/40 dark:text-white/40 mb-6">
            Backed by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["Mercatus Center", "3FVC"].map((b) => (
              <div
                key={b}
                data-testid={`backer-${b.replace(/\s+/g, "-").toLowerCase()}`}
                className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/70 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-neoves-blue" />
                <span
                  className="font-display font-medium tracking-tight text-neoves-black/80 dark:text-white/80"
                  style={{ fontSize: 14 }}
                >
                  {b}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
