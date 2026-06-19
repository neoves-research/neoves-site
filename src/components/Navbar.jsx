import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NeovesLogo } from "./NeovesLogo";
import { useTheme } from "../context/ThemeContext";

const links = [
  { label: "Research", href: "#research" },
  { label: "Mission", href: "#mission" },
  { label: "Milestones", href: "#milestones" },
  { label: "Team", href: "#team" },
];

const Navbar = () => {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="navbar"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 dark:bg-white/90 backdrop-blur-xl border-b border-white/10 dark:border-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2" data-testid="nav-logo">
          <NeovesLogo
            className="h-9 w-auto"
            variant={theme === "dark" ? "dark" : "light"}
          />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={`px-4 py-2 text-sm transition-colors ${
                scrolled
                  ? "text-white/80 dark:text-black/80 hover:text-white dark:hover:text-black"
                  : "text-neoves-black/70 dark:text-white/70 hover:text-neoves-black dark:hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            data-testid="nav-cta"
            className="pill-btn-primary ml-2 px-5 py-2.5 text-sm"
          >
            Contact Us
          </a>
        </nav>

        <button
          aria-label="Menu"
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((s) => !s)}
          className={`md:hidden p-2 ${
            scrolled
              ? "text-white dark:text-black"
              : "text-neoves-black dark:text-white"
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden overflow-hidden ${
              scrolled
                ? "bg-black/90 dark:bg-white/90 border-b border-white/10 dark:border-black/10"
                : "bg-white dark:bg-black border-b border-black/5 dark:border-white/10"
            }`}
          >
            <div className="container-x py-4 flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`py-2 text-sm ${
                    scrolled
                      ? "text-white/80 dark:text-black/80"
                      : "text-neoves-black/80 dark:text-white/80"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="pill-btn-primary mt-2 self-start"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
