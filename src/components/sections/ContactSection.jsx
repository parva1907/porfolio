"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:rastogiparva@gmail.com",
    display: "rastogiparva@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:+918840861773",
    display: "+91-8840861773",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/parva1907",
    display: "github.com/parva1907",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/parva-rastogi/",
    display: "linkedin.com/in/parva-rastogi",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6"
      style={{ zIndex: 10 }}
    >
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-mono text-sm text-neon-cyan mb-3">
            {"// get_in_touch()"}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let&apos;s Build Together</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-12 max-w-lg mx-auto">
            Interested in collaborating on AI/ML projects, backend systems, or
            research? Let&apos;s connect and create something extraordinary.
          </p>
        </motion.div>

        {/* Contact links */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group glass-panel-sm p-4 flex items-center gap-4 card-hover"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-neon-blue group-hover:text-neon-cyan transition-colors duration-300"
                style={{ background: "rgba(0,212,255,0.08)" }}
              >
                {link.icon}
              </div>
              <div>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                  {link.label}
                </p>
                <p className="text-sm text-gray-300 group-hover:text-neon-blue transition-colors duration-300">
                  {link.display}
                </p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="glass-panel p-6 sm:p-8 max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-bold mb-6 text-gray-200 flex items-center gap-2 font-mono">
            <span className="text-neon-cyan text-sm">{"<"}</span>
            Send Message
            <span className="text-neon-cyan text-sm">{" />"}</span>
          </h3>

          {submitStatus === "success" ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-6"
            >
              <div className="w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400 text-xl font-bold">
                ✓
              </div>
              <h4 className="text-base font-bold text-gray-200 mb-1">Message Sent!</h4>
              <p className="text-xs text-gray-400 mb-6">
                Thank you for reaching out. I&apos;ll get back to you as soon as possible.
              </p>
              <button
                type="button"
                onClick={() => setSubmitStatus(null)}
                className="px-6 py-2 rounded-xl text-xs font-mono border border-dark-border text-gray-400 hover:text-neon-blue hover:border-neon-blue/30 transition-all duration-300 cursor-pointer"
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-gray-500 mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-dark-border rounded-xl px-4 py-2.5 text-xs text-gray-300 focus:outline-none focus:border-neon-blue/40 transition-colors duration-300"
                    style={{ borderColor: errors.name ? "rgba(239, 68, 68, 0.4)" : undefined }}
                    required
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1 font-mono">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-gray-500 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-dark-border rounded-xl px-4 py-2.5 text-xs text-gray-300 focus:outline-none focus:border-neon-blue/40 transition-colors duration-300"
                    style={{ borderColor: errors.email ? "rgba(239, 68, 68, 0.4)" : undefined }}
                    required
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1 font-mono">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-gray-500 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-background/50 border border-dark-border rounded-xl px-4 py-2.5 text-xs text-gray-300 focus:outline-none focus:border-neon-blue/40 transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-gray-500 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-background/50 border border-dark-border rounded-xl px-4 py-2.5 text-xs text-gray-300 focus:outline-none focus:border-neon-blue/40 transition-colors duration-300 resize-none"
                  style={{ borderColor: errors.message ? "rgba(239, 68, 68, 0.4)" : undefined }}
                  required
                />
                {errors.message && <p className="text-red-400 text-xs mt-1 font-mono">{errors.message}</p>}
              </div>

              {submitStatus === "error" && (
                <p className="text-red-400 text-xs font-mono">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative py-3 rounded-xl font-semibold text-xs text-white overflow-hidden transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, var(--neon-blue), var(--neon-purple))",
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center border-t border-dark-border pt-8"
        >
          <p className="font-mono text-xs text-gray-600">
            <span className="text-gray-500">{"/*"}</span> Designed &amp; Built
            by Parva Rastogi{" "}
            <span className="text-gray-500">{"*/"}</span>
          </p>
          <p className="font-mono text-xs text-gray-700 mt-2">
            © {new Date().getFullYear()} — Made with Three.js, React &amp; a lot
            of ☕
          </p>
        </motion.div>
      </div>
    </section>
  );
}
