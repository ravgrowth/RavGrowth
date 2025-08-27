const fs = require("fs");
const path = require("path");

const siteUrl = "https://ravgrowth.com";

// Load blog index.json
const posts = JSON.parse(
  fs.readFileSync(path.join(__dirname, "public/posts/index.json"), "utf8")
);

// Static routes
const staticPages = [
  { loc: "/", priority: 1.0 },
  { loc: "/about", priority: 0.8 },
  { loc: "/contact", priority: 0.8 },
  { loc: "/newsletter", priority: 0.7 },
  { loc: "/ravbot", priority: 0.7 },
  { loc: "/blog", priority: 0.6 }
];

// Build XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

staticPages.forEach((page) => {
  xml += `  <url>\n    <loc>${siteUrl}${page.loc}</loc>\n    <priority>${page.priority}</priority>\n  </url>\n`;
});

posts.forEach((post) => {
  xml += `  <url>\n    <loc>${siteUrl}/blog/${post.slug}</loc>\n    <priority>0.5</priority>\n  </url>\n`;
});

xml += `</urlset>`;

// Write file to public/
fs.writeFileSync(path.join(__dirname, "public/sitemap.xml"), xml, "utf8");

console.log("✅ sitemap.xml generated!");
