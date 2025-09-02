import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet-async";

function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({});

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
      })
      .then((text) => {
        // regex to grab frontmatter between --- ---
        const fmMatch = /^---\n([\s\S]+?)\n---/.exec(text);
        let metadata = {};
        let body = text;

        if (fmMatch) {
          body = text.replace(fmMatch[0], ""); // strip frontmatter
          fmMatch[1].split("\n").forEach((line) => {
            const [key, ...rest] = line.split(":");
            if (key && rest.length) {
              metadata[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "");
            }
          });
        }

        setMeta(metadata);
        setContent(body);
      })
      .catch(() => setContent("# 404 - Article Not Found"));
  }, [slug]);

  return (
    <main style={{ padding: "1rem", maxWidth: "720px", margin: "auto" }}>
      <Helmet>
        <title>
          {meta.title ? `${meta.title} – RavGrowth Blog` : "RavGrowth Blog"}
        </title>
        <meta
          name="description"
          content={
            meta.description ||
            "Read this RavGrowth article on building wealth with AI and automation."
          }
        />

        {/* Canonical */}
        <link rel="canonical" href={`https://ravgrowth.com/blog/${slug}`} />

        {/* Open Graph */}
        <meta property="og:title" content={meta.title || "RavGrowth Blog Post"} />
        <meta
          property="og:description"
          content={
            meta.description ||
            "Insights from RavGrowth on building wealth with AI."
          }
        />
        <meta
          property="og:image"
          content={meta.image || "https://ravgrowth.com/hero.webp"}
        />
        <meta property="og:url" content={`https://ravgrowth.com/blog/${slug}`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {content ? (
        <ReactMarkdown skipHtml>{content}</ReactMarkdown>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}

export default BlogPost;
