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
  alternates: {
    canonical: "https://parvarastogi.dev",
  },
  openGraph: {
    title: "Parva Rastogi | AI/ML & Backend Developer",
    description:
      "Interactive 3D portfolio showcasing AI/ML engineering, backend development, and research.",
    type: "website",
    url: "https://parvarastogi.dev",
    images: [
      {
        url: "https://parvarastogi.dev/og-image.png",
        width: 1200,
        height: 1200,
        alt: "Parva Rastogi | AI/ML & Backend Developer Portfolio Preview",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col scanline-overlay">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Parva Rastogi",
              url: "https://parvarastogi.dev",
              sameAs: [
                "https://github.com/parva1907",
                "https://www.linkedin.com/in/parva-rastogi/",
              ],
              jobTitle: "AI/ML & Backend Developer",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Chandigarh University",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
