"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const contactItems = [
    {
      label: "Email",
      value: "rastogiparva@gmail.com",
      href: "mailto:rastogiparva@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2.25 6.75" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+91 88408 61773",
      href: "tel:+918840861773",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
    },
    {
      label: "Education",
      value: "B.E. CSE (2022 - 2026)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7 0v7.25" />
        </svg>
      ),
    },
    {
      label: "Location",
      value: "Ayodhya, India",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      ),
    },
  ];

  return (
    <aside className="vcard-sidebar relative flex flex-col w-full xl:w-[280px] shrink-0 transition-all duration-300 z-10">
      {/* Mobile Show Contacts Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-0 right-0 xl:hidden flex items-center gap-1 px-4 py-2 text-xs font-medium border-t-0 border-r-0 border-l border-b border-border-jet bg-card-jet text-accent-gold rounded-tr-[20px] rounded-bl-[20px] transition-all hover:text-accent-gold-hover cursor-pointer"
        aria-label="Toggle contact information"
      >
        <span>{isOpen ? "Hide Contacts" : "Show Contacts"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Main Profile Info Section */}
      <div className="flex flex-row xl:flex-col items-center xl:items-center gap-5 xl:gap-6 xl:text-center">
        {/* Avatar Frame */}
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 xl:w-[150px] xl:h-[150px] bg-card-jet rounded-[20px] sm:rounded-[30px] overflow-hidden flex items-center justify-center border border-border-jet">
          <Image
            src="/avatar.png"
            alt="Parva Rastogi"
            width={150}
            height={150}
            className="object-cover"
            priority
          />
        </div>

        {/* Text Info */}
        <div className="flex-1 xl:flex-none">
          <h1 className="text-xl sm:text-2xl font-semibold text-text-white tracking-tight xl:mb-2.5">
            Parva Rastogi
          </h1>
          
          <div className="flex flex-wrap gap-1.5 xl:justify-center">
            <span className="px-3 py-1 bg-card-jet text-text-gray text-[10px] sm:text-xs font-normal rounded-lg border border-border-jet">
              AI/ML Engineer
            </span>
            <span className="px-3 py-1 bg-card-jet text-text-gray text-[10px] sm:text-xs font-normal rounded-lg border border-border-jet">
              Backend Developer
            </span>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="hidden xl:block w-full h-px bg-border-jet my-6" />

      {/* Collapsible Contacts Section */}
      <div
        className={`xl:block transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100 mt-6 xl:mt-0" : "max-h-0 xl:max-h-none opacity-0 xl:opacity-100"
        }`}
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4 sm:gap-6 xl:gap-5">
          {contactItems.map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <div className="icon-box shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs text-text-muted uppercase font-medium">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-text-white hover:text-accent-gold transition-colors duration-200 block truncate"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-xs sm:text-sm text-text-white block truncate">
                    {item.value}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Separator */}
        <div className="w-full h-px bg-border-jet my-6" />

        {/* Social Icons */}
        <div className="flex items-center gap-4 xl:justify-center">
          <a
            href="https://github.com/parva1907"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-gold transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/parva-rastogi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-gold transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
