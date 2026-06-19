import React from "react";
import { motion } from "framer-motion";

const advisors = [
  {
    name: "Mercatus Center",
    sub: "Emergent Ventures Grant · 2025",
    logo: "/assets/mercatus-logo.png",
  },
  {
    name: "3FVC",
    sub: "Backers · 2026",
    logo: "/assets/3fvc-logo.png",
  },
  {
    name: "BITS Hyderabad",
    sub: "Startup Ecosystem · TBI",
    logo: "/assets/bits-logo.png",
  },
];

const Advisors = () => (
  <section
    data-testid="advisors-section"
    className="bg-neoves-gray dark:bg-neutral-900 py-24 md:py-28"
  >
    <div className="container-x">
      <div className="max-w-3xl">
        <span className="eyebrow">Advisors & Supporters</span>
        <h2 className="heading-md mt-5 text-neoves-black dark:text-white">
          Backed and supported by partners who believe in the science.
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {advisors.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="rounded-2xl bg-white dark:bg-neutral-800 border border-black/8 dark:border-white/10 p-7 hover:border-neoves-blue/35 transition-colors"
          >
            <img
              src={a.logo}
              alt={a.name}
              // This ensures the logo is pure white in dark mode
              className="h-10 w-auto object-contain mb-3 dark:brightness-0 dark:invert"
            />
            <div className="h-12 flex items-center">
              <span className="font-display text-xl font-semibold tracking-tight text-neoves-black dark:text-white">
                {a.name}
              </span>
            </div>
            <p className="mt-2 text-sm text-neoves-black/55 dark:text-white/55">{a.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Advisors;
