import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Layout() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Global SEO defaults */}
      <Helmet>
        <title>RavGrowth – Build Wealth On Autopilot</title>
        <meta
          name="description"
          content="RavBot automates your wealth building with AI. Learn how to grow money smarter."
        />
        <link rel="canonical" href="https://ravgrowth.com" />

        {/* Open Graph defaults */}
        <meta property="og:title" content="RavGrowth – Build Wealth On Autopilot" />
        <meta
          property="og:description"
          content="RavBot is your automated financial operator that grows your wealth with AI."
        />
        <meta property="og:image" content="https://ravgrowth.com/hero.webp" />
        <meta property="og:url" content="https://ravgrowth.com" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Header */}
      <header
        style={{
          padding: "20px",
          borderBottom: "1px solid #333",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
            maxWidth: "600px",
            width: "100%",
          }}
        >
          <Link to="/" style={{ color: "white" }}>Home</Link>
          <Link to="/blog" style={{ color: "white" }}>Blog</Link>
          <Link to="/about" style={{ color: "white" }}>About</Link>
          <a
            href="https://app.ravgrowth.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            RavBot
          </a>
          <Link to="/contact" style={{ color: "white" }}>Contact</Link>
          <Link to="/newsletter" style={{ color: "white" }}>Newsletter</Link>
        </nav>
      </header>

      {/* Page Content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "0",
          boxSizing: "border-box",
        }}
      >
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: "20px",
          borderTop: "1px solid #333",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "#aaa",
        }}
      >
        <p>© {new Date().getFullYear()} RavGrowth. Built to automate wealth.</p>
        <p>
          <a
            href="mailto:contact@ravgrowth.com"
            style={{ color: "#aaa", textDecoration: "underline" }}
          >
            contact@ravgrowth.com
          </a>
        </p>
      </footer>
    </div>
  );
}
