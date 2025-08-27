import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact – RavGrowth</title>
        <meta
          name="description"
          content="Get in touch with RavGrowth via email, Instagram, or TikTok. We'll help you build wealth on autopilot."
        />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Contact – RavGrowth" />
        <meta
          property="og:description"
          content="Reach out to RavGrowth and start automating your financial growth."
        />
        <meta property="og:image" content="https://ravgrowth.com/hero.webp" />
        <meta property="og:url" content="https://ravgrowth.com/contact" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "16px",
          textAlign: "center",
        }}
      >
        <h1>Contact Us</h1>
        <p>
          Email:{" "}
          <a href="mailto:contact@ravgrowth.com">contact@ravgrowth.com</a>
        </p>
        <p>
          DM us on{" "}
          <a
            href="https://www.instagram.com/officialravgrowth"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>{" "}
          or{" "}
          <a
            href="https://www.tiktok.com/@rav.growth"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
        </p>
      </div>
    </>
  );
}
