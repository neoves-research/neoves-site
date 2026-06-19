import React from "react";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { NeovesLogo } from "./NeovesLogo";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      data-testid="footer"
      className="bg-black dark:bg-white text-white dark:text-black pt-20 pb-10 border-t border-white/10 dark:border-black/10"
    >
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
           <div className="flex items-center gap-3">
  <NeovesLogo className="h-12 w-auto" variant={isDark ? "dark" : "light"} />
  <span
    style={{
      fontFamily: "Montserrat, sans-serif",
      color: isDark ? "#0b2f63" : "#FFFFFF",
      letterSpacing: "0.02em",
    }}
    className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider transition-colors duration-300"
  >
    NEOVES
  </span>
</div>
            <p className="mt-5 text-white/55 dark:text-black/55 max-w-md leading-relaxed">
              A research-driven biotech startup exploring stem-cell-based
              solutions for neuropathy and nerve damage — to enable well-being.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 dark:text-black/40 mb-4">
              Explore
            </p>
            <ul className="space-y-3 text-sm text-white/70 dark:text-black/70">
              <li>
                <a
                  href="#research"
                  className="hover:text-neoves-blue transition-colors"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="#mission"
                  className="hover:text-neoves-blue transition-colors"
                >
                  Mission
                </a>
              </li>
              <li>
                <a
                  href="#milestones"
                  className="hover:text-neoves-blue transition-colors"
                >
                  Milestones
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-neoves-blue transition-colors"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 dark:text-black/40 mb-4">
              Contact
            </p>
            <a
              href="mailto:neoves.contact@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-white/80 dark:text-black/80 hover:text-neoves-blue transition-colors"
            >
              <Mail size={14} /> neoves.contact@gmail.com
            </a>
            <div className="mt-6 flex gap-2">
              <a
                href="#contact"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 dark:border-black/15 hover:bg-neoves-blue hover:border-neoves-blue transition-colors text-white/70 dark:text-black/70 hover:text-white"
                aria-label="Email"
              >
                <Mail size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/soumil-nema-81a56b219/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 dark:border-black/15 hover:bg-neoves-blue hover:border-neoves-blue transition-colors text-white/70 dark:text-black/70 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 dark:border-black/10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-white/40 dark:text-black/40">
            © {new Date().getFullYear()} Neoves. All rights reserved.
          </p>
          <p className="text-xs text-white/40 dark:text-black/40 font-mono">
            neoves.in · Stem cells for neuropathy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
