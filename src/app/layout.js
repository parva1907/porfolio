import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Parva Rastogi | AI/ML & Backend Developer",
  description:
    "Portfolio of Parva Rastogi — AI/ML Engineer & Backend Developer specializing in scalable systems, RAG pipelines, and machine learning. GATE 2026 CSE Score: 633.",
  keywords: [
    "AI Engineer",
    "ML Developer",
    "Backend Developer",
    "RAG Pipeline",
    "Machine Learning",
    "Parva Rastogi",
  ],
  authors: [{ name: "Parva Rastogi" }],
  openGraph: {
    title: "Parva Rastogi | AI/ML & Backend Developer",
    description:
      "Interactive 3D portfolio showcasing AI/ML engineering, backend development, and research.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col scanline-overlay">
        {children}
      </body>
    </html>
  );
}
