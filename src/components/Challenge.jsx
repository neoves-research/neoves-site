import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, Activity, HeartPulse } from "lucide-react";

const facts = [
  {
    icon: AlertCircle,
    stat: "30–40%",
    label: "of cancer patients experience chemotherapy-induced peripheral neuropathy.",
  },
  {
    icon: Activity,
    stat: "Symptomatic",
    label: "Most current therapies treat symptoms — they don't restore nerve function.",
  },
  {
    icon: HeartPulse,
    stat: "Well-being",
    label: "is more than survival. Quality of life is the missing dimension.",
  },
];

const Challenge = () => {
  return (
    <section
      id="challenge"
      data-testid="challenge-section"
      className="relative bg-white dark:bg-black py-28 md:py-36"
    >
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="eyebrow">The Challenge</span>
            <h2 className="heading-lg mt-5 text-neoves-black dark:text-white">
              Nerve damage steals quality of life — and we mostly treat the pain.
            </h2>
            {/* Body text – slightly bigger */}
            <p className="mt-6 text-neoves-black/80 dark:text-white/80 leading-relaxed text-lg">
              Cancer and neurological diseases often lead to neuropathy, resulting
              in pain, sensory impairment, and reduced quality of life. Current
              treatments largely address symptoms rather than underlying recovery.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {facts.map((f, i) => (
              <motion.div
                key={f.stat}
                data-testid="challenge-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-black/8 dark:border-white/10 bg-neoves-gray dark:bg-neutral-900 p-6 hover:bg-white dark:hover:bg-neutral-800 hover:border-neoves-blue/30 dark:hover:border-neoves-blue/30 hover:shadow-[0_10px_40px_-20px_rgba(90,114,240,0.4)] transition-all"
              >
                <f.icon className="text-neoves-blue" size={22} />
                <div className="mt-6 font-display text-2xl font-semibold tracking-tight text-neoves-black dark:text-white">
                  {f.stat}
                </div>
                <p className="mt-2 text-sm text-neoves-black/80 dark:text-white/80 leading-relaxed">
                  {f.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
