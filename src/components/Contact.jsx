import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import GradientBackground from "./GradientBackground";

const Contact = () => {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative bg-white dark:bg-black py-28 md:py-36 overflow-hidden"
    >
      <GradientBackground intensity="medium" />
      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <span className="eyebrow">Connect with us</span>
            <h2 className="heading-lg mt-5 text-neoves-black dark:text-white">
              Let's talk research, partnerships, or curiosity.
            </h2>
            {/* Body text – slightly bigger */}
            <p className="mt-6 text-neoves-black/80 dark:text-white/80 leading-relaxed text-lg">
              If you are interested in working with us or learning more about
              our research, we'd love to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 rounded-3xl border border-black/8 dark:border-white/10 bg-neoves-gray dark:bg-neutral-900 p-7 md:p-10 text-center"
          >
            <Mail className="mx-auto text-neoves-blue" size={48} strokeWidth={1.5} />
            <p className="mt-4 text-lg font-medium text-neoves-black dark:text-white">Reach out directly</p>
            <a
              href="mailto:neoves.contact@gmail.com?subject=Inquiry%20about%20Neoves"
              data-testid="contact-mailto-link"
              className="mt-4 inline-flex items-center gap-3 rounded-full bg-neoves-blue px-6 py-3 text-white hover:bg-[#4A5FD8] transition-colors"
            >
              <span>Send us an email</span>
              <ArrowRight size={16} />
            </a>
            <p className="mt-4 text-sm text-neoves-black/50 dark:text-white/50">
              neoves.contact@gmail.com
            </p>
            <p className="mt-2 text-xs text-neoves-black/40 dark:text-white/40">
              We typically reply within 2–3 working days.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
