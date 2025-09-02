const fs = require("fs");
const path = require("path");

const postsDir = path.join(__dirname, "public/posts");
const indexFile = path.join(postsDir, "index.json");

function parseFrontmatter(content) {
  const match = /^---\n([\s\S]+?)\n---/.exec(content);
  let metadata = {};
  if (match) {
    match[1].split("\n").forEach((line) => {
      const [key, ...rest] = line.split(":");
      if (key && rest.length) {
        metadata[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "");
      }
    });
  }
  return metadata;
}

let posts = [];

if (fs.existsSync(postsDir)) {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));

  posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const content = fs.readFileSync(path.join(postsDir, file), "utf8");
    const fm = parseFrontmatter(content);

    return {
      slug,
      title: fm.title || slug,
      description: fm.description || "",
      image: fm.image || "",
      date: fm.date || new Date().toISOString().split("T")[0]
    };
  });
}

// Sort newest first
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync(indexFile, JSON.stringify(posts, null, 2), "utf8");

console.log("✅ index.json generated from Markdown!");
