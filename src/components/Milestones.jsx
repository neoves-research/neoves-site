import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const milestones = [
  { date: "Aug 2024", title: "First pitch to TBI", body: "Informal pitch to TBI (BITS Startup Incubator)." },
  { date: "Oct 2024", title: "Top 15 at IKMC 2024", body: "Selected for the Future Stars U25 Grant at IKMC 2024." },
  { date: "Mar 2025", title: "Presented at RISE", body: "Research-Inspired Student Entrepreneurship by TBI at BITS Hyderabad." },
  { date: "Apr 2025", title: "Mercatus EV Grant", body: "Recipient of the Mercatus Emergent Ventures Grant." },
  { date: "Sep 2025", title: "Research proposal approved", body: "Approved at BITS Hyderabad." },
  { date: "Oct 2025", title: "IKMC 2025 delegate", body: "Participated in IKMC 2025 as a delegate." },
  { date: "Jun 2026", title: "Backed by 3FVC", body: "Receiving backing from 3FVC." },
];

const Item = ({ m, i }) => (
  <motion.div
    data-testid="timeline-item"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, delay: i * 0.04 }}
    className="relative pl-16 md:pl-24 pb-12"
  >
    <div className="absolute left-5 md:left-8 top-1 h-4 w-4 rounded-full bg-neoves-blue ring-4 ring-white dark:ring-black shadow-[0_0_0_2px_rgba(90,114,240,0.25)]" />
    <p className="font-mono text-xs uppercase tracking-[0.25em] text-neoves-blue">
      {m.date}
    </p>
    <h3 className="mt-2 font-display text-xl md:text-2xl font-semibold tracking-tight text-neoves-black dark:text-white">
      {m.title}
    </h3>
    {/* Body text – slightly bigger */}
    <p className="mt-2 text-neoves-black/80 dark:text-white/80 max-w-xl leading-relaxed text-lg">{m.body}</p>
  </motion.div>
);

const Milestones = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="milestones"
      data-testid="milestones-section"
      className="relative py-28 md:py-36 bg-neoves-gray dark:bg-neutral-900"
    >
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <span className="eyebrow">Milestones</span>
          <h2 className="heading-lg mt-5 text-neoves-black dark:text-white">
            A young company moving with conviction.
          </h2>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute left-[26px] md:left-[38px] top-0 bottom-0 w-px bg-black/10 dark:bg-white/10" />
          <motion.div
            style={{ height: fillHeight }}
            className="absolute left-[26px] md:left-[38px] top-0 w-px bg-neoves-blue"
          />

          {milestones.map((m, i) => (
            <Item key={m.date} m={m} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
