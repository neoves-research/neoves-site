import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const team = [
  {
    name: "Soumil Nema",
    initials: "SN",
    role: "CEO",
    details: [
      "Currently pursuing PhD at University of Tsukuba",
      "B.Pharm at BITS Hyderabad (2020–2024)",
      "Recipient of the MEXT Scholarship — Government of Japan",
    ],
    linkedin: "https://www.linkedin.com/in/soumil-nema-81a56b219/",
    email: "soumilnema@gmail.com",
    image: "/assets/soumil.png",
  },
  {
    name: "Aashi Sharma",
    initials: "AS",
    role: "CTO",
    details: [
      "Pursuing Master's Thesis at University of Tsukuba",
      "M.Pharm at BITS Hyderabad (2024–2026)",
      "B.Pharm at BITS Hyderabad (2020–2024)",
      "Aspires to pursue a PhD after her Master's",
    ],
    linkedin: "https://www.linkedin.com/in/aashi-sharma-3544b0232/",
    email: "aashisharma.india@gmail.com",
    image: "/assets/aashi.png",
  },
  {
    name: "A.P. Rishikeshvar",
    initials: "AP",
    role: "CBO",
    details: [
      "MSc Biological Sciences + BE Mechanical Engineering at BITS Hyderabad (2022–2027)",
      "Incoming thesis student at IIT Kanpur (Cognitive Neuroscience)",
      "Interested in computational & translational neuroscience and entrepreneurship",
    ],
    linkedin: "https://www.linkedin.com/in/aprishikeshvar-rishhhwrites/",
    email: "rishhh.writes@gmail.com",
    image: "/assets/rishi.png",
  },
];

const Card = ({ p, i }) => (
  <motion.article
    data-testid="team-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay: i * 0.08 }}
    className="group relative rounded-3xl bg-white dark:bg-neutral-800 border border-black/8 dark:border-white/10 p-7 overflow-hidden hover:border-neoves-blue/40 hover:-translate-y-1 transition-all duration-300"
  >
    <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-neoves-blue/10 dark:bg-neoves-blue/20 blur-3xl group-hover:bg-neoves-blue/25 transition-colors" />

    <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '1240/1748' }}>
      <img
        src={p.image}
        alt={p.name}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="relative mt-6 flex items-baseline justify-between">
      <h3 className="font-display text-xl font-semibold tracking-tight text-neoves-black dark:text-white">
        {p.name}
      </h3>
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-neoves-blue font-semibold">
        {p.role}
      </span>
    </div>

    <ul className="relative mt-4 space-y-2">
      {p.details.map((d) => (
        <li key={d} className="text-sm text-neoves-black/80 dark:text-white/80 leading-relaxed flex gap-2">
          <span className="mt-2 h-1 w-1 rounded-full bg-neoves-blue/50 flex-shrink-0" />
          {d}
        </li>
      ))}
    </ul>

    <div className="relative mt-6 flex gap-2">
      <a
        href={p.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={`team-linkedin-${p.initials.toLowerCase()}`}
        className="inline-flex items-center gap-2 rounded-full bg-neoves-black dark:bg-white text-white dark:text-black px-4 py-2 text-xs hover:bg-neoves-blue hover:text-white transition-colors"
      >
        <FaLinkedin size={13} /> LinkedIn
      </a>
      <a
        href={`mailto:${p.email}`}
        data-testid={`team-email-${p.initials.toLowerCase()}`}
        className="inline-flex items-center gap-2 rounded-full border border-black/15 dark:border-white/20 text-neoves-black dark:text-white px-4 py-2 text-xs hover:bg-neoves-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
      >
        <Mail size={13} /> Email
      </a>
    </div>
  </motion.article>
);

const Team = () => (
  <section id="team" data-testid="team-section" className="bg-white dark:bg-black py-28 md:py-36">
    <div className="container-x">
      <div className="max-w-3xl mb-14">
        <span className="eyebrow">Meet our team</span>
        <h2 className="heading-lg mt-5 text-neoves-black dark:text-white">
          Scientists and operators building Neoves.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((p, i) => (
          <Card key={p.name} p={p} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Team;
