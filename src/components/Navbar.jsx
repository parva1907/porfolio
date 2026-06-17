"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = useCallback(
    (href) => {
      setMobileOpen(false);
      const el = document.getElementById(href.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Skip to main content — accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-neon-blue focus:text-black focus:font-semibold focus:text-sm"
      >
        Skip to main content
      </a>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-[60] transition-all duration-300"
        style={{
          background: isScrolled
            ? "rgba(3, 3, 8, 0.82)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(100, 100, 255, 0.08)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNav("#hero")}
              className="flex items-center gap-2 group cursor-pointer"
              aria-label="Go to top"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300 group-hover:shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, var(--neon-blue), var(--neon-purple))",
                  boxShadow: "0 0 12px rgba(0,212,255,0.2)",
                }}
              >
                PR
              </div>
              <span className="font-mono text-sm text-gray-400 group-hover:text-neon-blue transition-colors duration-300 hidden sm:inline">
                parva.dev
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className="relative px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-300 cursor-pointer"
                    style={{
                      color: isActive
                        ? "var(--neon-blue)"
                        : "rgba(156, 163, 175, 1)",
                    }}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background: "rgba(0, 212, 255, 0.08)",
                          border: "1px solid rgba(0, 212, 255, 0.15)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Resume CTA — desktop */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 hover:opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, var(--neon-blue), var(--neon-purple))",
                color: "#fff",
              }}
              aria-label="Download resume PDF"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3.5 h-3.5"
              >
                <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
              </svg>
              Resume
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-neon-blue transition-colors duration-200 cursor-pointer"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <div className="relative w-5 h-4">
                <span
                  className="absolute left-0 right-0 h-0.5 rounded-full bg-current transition-all duration-300"
                  style={{
                    top: mobileOpen ? "7px" : "0px",
                    transform: mobileOpen ? "rotate(45deg)" : "rotate(0)",
                  }}
                />
                <span
                  className="absolute left-0 right-0 h-0.5 rounded-full bg-current transition-all duration-300"
                  style={{
                    top: "7px",
                    opacity: mobileOpen ? 0 : 1,
                  }}
                />
                <span
                  className="absolute left-0 right-0 h-0.5 rounded-full bg-current transition-all duration-300"
                  style={{
                    top: mobileOpen ? "7px" : "14px",
                    transform: mobileOpen ? "rotate(-45deg)" : "rotate(0)",
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[55] md:hidden"
            style={{
              background: "rgba(3, 3, 8, 0.95)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-3 px-8">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    onClick={() => handleNav(link.href)}
                    className="w-full max-w-xs text-center py-3 rounded-xl font-mono text-base transition-all duration-200 cursor-pointer"
                    style={{
                      color: isActive
                        ? "var(--neon-blue)"
                        : "rgba(156, 163, 175, 1)",
                      background: isActive
                        ? "rgba(0, 212, 255, 0.06)"
                        : "transparent",
                      border: isActive
                        ? "1px solid rgba(0, 212, 255, 0.15)"
                        : "1px solid transparent",
                    }}
                  >
                    {link.label}
                  </motion.button>
                );
              })}

              {/* Resume — mobile */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
                style={{
                  background:
                    "linear-gradient(135deg, var(--neon-blue), var(--neon-purple))",
                  color: "#fff",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
