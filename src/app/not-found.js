import Link from "next/link";

export const metadata = {
  title: "404 — Page Not Found | Parva Rastogi",
  description: "This page doesn't exist. Let's get you back on track.",
};

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: "var(--background)" }}
    >
      <div className="text-center max-w-md">
        {/* Glitch-style 404 */}
        <h1
          className="text-8xl sm:text-9xl font-bold font-mono mb-4"
          style={{
            background:
              "linear-gradient(135deg, var(--neon-blue), var(--neon-purple), var(--neon-pink))",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </h1>

        {/* Terminal error */}
        <div className="terminal-window mb-8 text-left">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500/80" />
            <div className="terminal-dot bg-yellow-500/80" />
            <div className="terminal-dot bg-green-500/80" />
            <span className="font-mono text-xs text-gray-500 ml-3">
              error.log
            </span>
          </div>
          <div className="p-4 font-mono text-xs">
            <p className="text-red-400">
              Error: PAGE_NOT_FOUND
            </p>
            <p className="text-gray-500 mt-1">
              at Router.resolve (next/navigation)
            </p>
            <p className="text-gray-500">
              at Server.handleRequest (next/server)
            </p>
            <p className="text-gray-600 mt-2">
              &gt; The requested route does not exist in this portfolio.
            </p>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-8">
          Looks like this page got lost in the vector space. Let&apos;s navigate
          you back to familiar coordinates.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:opacity-90"
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
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clipRule="evenodd"
            />
          </svg>
          Back to Portfolio
        </Link>
      </div>
    </main>
  );
}
