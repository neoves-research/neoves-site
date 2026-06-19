import React from "react";
import { motion } from "framer-motion";
import GradientBackground from "./GradientBackground";

const Mission = () => {
  return (
    <section
      id="mission"
      data-testid="mission-section"
      className="relative py-28 md:py-36 bg-white dark:bg-black overflow-hidden"
    >
    
    <GradientBackground intensity="medium" />

      <div className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="glass-card dark:glass-card-dark rounded-[28px] p-10 md:p-16 max-w-5xl mx-auto"
        >
          <span className="eyebrow">Our Mission</span>
          {/* Section title – bigger and bolder */}
          <h2 className="heading-lg mt-5 text-neoves-black dark:text-white max-w-3xl">
            Meaningful research, grounded in science, for the well-being of society.
          </h2>
          {/* Body text – slightly bigger */}
          <p className="mt-7 text-lg text-neoves-black/80 dark:text-white/80 leading-relaxed max-w-3xl">
            Our primary goal will always be to conduct meaningful research and
            bridge truth grounded in science for the well-being of society. As of
            now, we are focused on exploring the possibilities of using stem cells
            to solve for neuropathy.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { k: "01", v: "Truth before noise" },
              { k: "02", v: "Science with intent" },
              { k: "03", v: "Well-being first" },
            ].map((it) => (
              <div
                key={it.k}
                className="rounded-2xl border border-neoves-blue/15 bg-white/60 dark:bg-black/60 backdrop-blur-md p-5"
              >
                <span className="font-mono text-2xl font-bold text-neoves-blue tracking-[0.3em]">
                  {it.k}
                </span>
                <p className="mt-3 font-display text-lg font-medium tracking-tight text-neoves-black dark:text-white">
                  {it.v}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
