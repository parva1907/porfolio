"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import AboutTab from "@/components/tabs/AboutTab";
import ResumeTab from "@/components/tabs/ResumeTab";
import PortfolioTab from "@/components/tabs/PortfolioTab";
import ContactTab from "@/components/tabs/ContactTab";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [activeTab, setActiveTab] = useState("About");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const tabs = ["About", "Resume", "Portfolio", "Contact"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "About":
        return <AboutTab key="about" />;
      case "Resume":
        return <ResumeTab key="resume" />;
      case "Portfolio":
        return <PortfolioTab key="portfolio" />;
      case "Contact":
        return <ContactTab key="contact" />;
      default:
        return <AboutTab key="about" />;
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-bg-smoky py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[100]"
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container Wrapper */}
      <div className="relative flex flex-col xl:flex-row gap-6 items-start justify-center max-w-6xl w-full mx-auto">
        
        {/* Left Sidebar */}
        <Sidebar />

        {/* Right Content Panel */}
        <div className="vcard-content-card relative flex-1 w-full min-h-[500px] sm:min-h-[600px] flex flex-col pt-20 md:pt-6 pb-6 overflow-hidden z-10">
          
          {/* Top Tabs Navigation */}
          <nav className="absolute top-0 left-0 md:left-auto right-0 w-full md:w-auto bg-card-jet border-b md:border-l border-border-jet md:rounded-tr-[20px] md:rounded-bl-[20px] rounded-t-[20px] flex justify-around md:justify-end gap-1 px-4 sm:px-6 py-4 sm:py-5 z-20">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-3 py-1 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive ? "text-accent-gold" : "text-text-muted hover:text-text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {tab}
                </button>
              );
            })}
          </nav>

          {/* Active Tab Panel Content */}
          <div className="flex-1 w-full mt-4 md:mt-12">
            <AnimatePresence mode="wait">
              {renderTabContent()}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
