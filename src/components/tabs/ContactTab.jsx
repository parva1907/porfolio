"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactTab() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid";
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
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-8"
    >
      {/* Title */}
      <header>
        <h2 className="article-title">Contact</h2>
      </header>

      {/* Location Map */}
      <section className="space-y-4">
        <div className="relative w-full h-[300px] sm:h-[380px] rounded-[20px] overflow-hidden border border-border-jet/60 shadow-inner bg-card-jet">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57022.09117621406!2d82.15049539314981!3d26.780838183182885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07937e6d288b%3A0x2f64a4d64f02f928!2sAyodhya%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718660000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 filter grayscale invert contrast-[1.1]"
            title="Google Map showing Ayodhya, India"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section className="space-y-6">
        <h3 className="sub-title">Contact Form</h3>

        {submitStatus === "success" ? (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="gradient-border-card p-8 text-center rounded-[20px] space-y-4"
          >
            <div className="w-12 h-12 bg-accent-gold/10 border border-accent-gold/30 rounded-full flex items-center justify-center mx-auto text-accent-gold text-xl font-bold">
              ✓
            </div>
            <div className="space-y-2">
              <h4 className="text-base font-semibold text-text-white">Message Sent!</h4>
              <p className="text-xs sm:text-sm text-text-gray font-light max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out. I will read your message and reply as soon as possible.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSubmitStatus(null)}
              className="px-6 py-2.5 rounded-xl text-xs font-mono border border-border-jet text-text-gray hover:text-accent-gold hover:border-accent-gold/30 transition-all duration-300 cursor-pointer"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Input */}
              <div className="space-y-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  style={{ borderColor: errors.name ? "rgba(239, 68, 68, 0.4)" : undefined }}
                  required
                />
                {errors.name && (
                  <p className="text-red-400 text-xs font-mono pl-1">{errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  style={{ borderColor: errors.email ? "rgba(239, 68, 68, 0.4)" : undefined }}
                  required
                />
                {errors.email && (
                  <p className="text-red-400 text-xs font-mono pl-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Message Area */}
            <div className="space-y-2">
              <textarea
                name="message"
                placeholder="Your message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="form-input resize-none"
                style={{ borderColor: errors.message ? "rgba(239, 68, 68, 0.4)" : undefined }}
                required
              />
              {errors.message && (
                <p className="text-red-400 text-xs font-mono pl-1">{errors.message}</p>
              )}
            </div>

            {submitStatus === "error" && (
              <p className="text-red-400 text-xs font-mono text-center">
                Something went wrong. Please check your network and try again.
              </p>
            )}

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] hover:from-accent-gold/15 hover:to-accent-gold/5 text-accent-gold border border-border-jet/80 hover:border-accent-gold/30 rounded-xl font-mono text-xs font-medium transition-all duration-300 flex items-center gap-2.5 cursor-pointer shadow-md disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-accent-gold" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </section>
    </motion.article>
  );
}
