import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Dna, Microscope, FlaskConical, HeartPulse } from "lucide-react";
import GradientBackground from "./GradientBackground";

const goals = [
  { icon: Dna, text: "Understand regenerative pathways at the cellular level." },
  { icon: FlaskConical, text: "Explore stem-cell-based interventions for nerve repair." },
  { icon: Microscope, text: "Bridge scientific discovery and practical application." },
  { icon: HeartPulse, text: "Improve patient well-being, not just survival." },
];

const Research = () => {
  return (
    <section
      id="research"
      data-testid="research-section"
      className="relative bg-neoves-gray dark:bg-neutral-900 py-28 md:py-36 overflow-hidden"
    >
        <GradientBackground intensity="medium" />
      <div className="container-x relative z-10">
        <div className="max-w-3xl">
          <span className="eyebrow">Our Research</span>
          {/* Section title – bigger and bolder (heading-lg) */}
          <h2 className="heading-lg mt-5 text-neoves-black dark:text-white">
            Exploring the therapeutic potential of stem cells for nerve regeneration.
          </h2>
          {/* Body text – slightly bigger */}
          <p className="mt-6 text-neoves-black/80 dark:text-white/80 leading-relaxed text-lg">
            Neoves is researching and experimenting with the therapeutic potential
            of stem cells for neuropathy and nerve regeneration — connecting basic
            science with patient-centred outcomes.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Hero visual tile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 rounded-3xl overflow-hidden bg-neoves-black dark:bg-neutral-800 relative min-h-[320px]"
          >
            <img
              src="https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=srgb&fm=jpg&w=1400&q=80"
              alt="Abstract neural network"
              className="absolute inset-0 w-full h-full object-cover opacity-70 dark:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-neoves-black via-neoves-black/40 to-transparent dark:from-neutral-900 dark:via-neutral-900/60" />
            <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-end text-white">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-neoves-blue font-semibold">
                Focus area · 01
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mt-3">
                Stem cells as a substrate for regenerating peripheral nerves.
              </h3>
            </div>
          </motion.div>

          {/* Goals tile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 rounded-3xl bg-white dark:bg-neutral-800 border border-black/8 dark:border-white/10 p-8 md:p-10"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-neoves-blue font-semibold">
              Goals
            </p>
            <ul className="mt-5 space-y-4">
              {goals.map((g) => (
                <li
                  key={g.text}
                  data-testid="research-goal"
                  className="flex items-start gap-3 group"
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 rounded-full bg-neoves-blue/10 text-neoves-blue items-center justify-center group-hover:bg-neoves-blue group-hover:text-white transition-colors">
                    <g.icon size={15} />
                  </span>
                  <span className="text-neoves-black/80 dark:text-white/80 leading-relaxed text-base">{g.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bottom row of small cards */}
          {[
            {
              k: "Bench",
              v: "Cell culture & in vitro experimentation tied to clear endpoints.",
            },
            {
              k: "Bridge",
              v: "Translating molecular insight into therapeutic potential.",
            },
            {
              k: "Bedside",
              v: "Designing for outcomes patients actually care about.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.k}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.05 }}
              className="md:col-span-4 rounded-2xl bg-white dark:bg-neutral-800 border border-black/8 dark:border-white/10 p-6 hover:border-neoves-blue/40 transition-colors"
            >
              <div className="flex items-center gap-2 text-neoves-blue">
                <CheckCircle2 size={16} />
                <span className="font-mono text-xs uppercase tracking-[0.25em] font-semibold">
                  {c.k}
                </span>
              </div>
              <p className="mt-3 text-sm text-neoves-black/75 dark:text-white/75 leading-relaxed">{c.v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
