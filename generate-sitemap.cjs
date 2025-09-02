const fs = require("fs");
const path = require("path");

const siteUrl = "https://ravgrowth.com";
const today = new Date().toISOString().split("T")[0];

const posts = JSON.parse(
  fs.readFileSync(path.join(__dirname, "public/posts/index.json"), "utf8")
);

const staticPages = [
  { loc: "/", priority: 1.0 },
  { loc: "/about", priority: 0.8 },
  { loc: "/contact", priority: 0.8 },
  { loc: "/newsletter", priority: 0.7 },
  { loc: "/ravbot", priority: 0.7 },
  { loc: "/blog", priority: 0.6 }
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

staticPages.forEach((page) => {
  xml += `  <url>\n`;
  xml += `    <loc>${siteUrl}${page.loc}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <priority>${page.priority}</priority>\n`;
  xml += `  </url>\n`;
});

posts.forEach((post) => {
  xml += `  <url>\n`;
  xml += `    <loc>${siteUrl}/blog/${post.slug}</loc>\n`;
  xml += `    <lastmod>${post.date || today}</lastmod>\n`;
  xml += `    <priority>0.5</priority>\n`;
  xml += `  </url>\n`;
});

xml += `</urlset>`;

fs.writeFileSync(path.join(__dirname, "public/sitemap.xml"), xml, "utf8");

console.log("✅ sitemap.xml generated from index.json!");
