import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts/index.json")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "16px" }}>
      <Helmet>
        <title>Blog – RavGrowth</title>
        <meta
          name="description"
          content="Read insights, strategies, and updates from RavGrowth on building wealth with AI and automation."
        />
        <meta property="og:title" content="RavGrowth Blog" />
        <meta
          property="og:description"
          content="Explore the RavGrowth blog for the latest wealth-building strategies powered by AI."
        />
        <meta property="og:image" content="https://ravgrowth.com/hero.webp" />
        <meta property="og:url" content="https://ravgrowth.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>RavGrowth Blog</h1>

      {posts.map((post) => (
        <article
          key={post.slug}
          style={{
            marginBottom: "2rem",
            padding: "1rem",
            border: "1px solid #eee",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
          }}
        >
          {/* Use post.image if available, otherwise fallback */}
          <Link to={`/blog/${post.slug}`}>
            <img
              src={post.image || "https://ravgrowth.com/hero.webp"}
              alt={post.title}
              style={{
                width: "100%",
                maxHeight: "200px",
                objectFit: "cover",
                borderRadius: "6px",
                marginBottom: "1rem"
              }}
            />
          </Link>

          <h2 style={{ margin: "0 0 0.5rem" }}>
            <Link to={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "#333" }}>
              {post.title}
            </Link>
          </h2>

          {post.date && (
            <small style={{ color: "#666", display: "block", marginBottom: "0.5rem" }}>
              {post.date}
            </small>
          )}

          {post.description && (
            <p style={{ margin: "0 0 0.75rem", color: "#444" }}>{post.description}</p>
          )}

          <Link to={`/blog/${post.slug}`} style={{ color: "#0070f3", fontWeight: "bold" }}>
            Read more →
          </Link>
        </article>
      ))}
    </div>
  );
}

export default Blog;
