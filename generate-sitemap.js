const fs = require("fs");
const path = require("path");

const siteUrl = "https://ravgrowth.com";

// Today's date in YYYY-MM-DD
const today = new Date().toISOString().split("T")[0];

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
  xml += `  <url>\n`;
  xml += `    <loc>${siteUrl}${page.loc}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`; // always refreshed
  xml += `    <priority>${page.priority}</priority>\n`;
  xml += `  </url>\n`;
});

posts.forEach((post) => {
  const lastmod = post.date || today;
  xml += `  <url>\n`;
  xml += `    <loc>${siteUrl}/blog/${post.slug}</loc>\n`;
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += `    <priority>0.5</priority>\n`;
  xml += `  </url>\n`;
});

xml += `</urlset>`;

// Write file to public/
fs.writeFileSync(path.join(__dirname, "public/sitemap.xml"), xml, "utf8");

console.log("✅ sitemap.xml with dynamic <lastmod> generated!");
