import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const files = ['post1.md', 'post2.md'];
    Promise.all(
      files.map(async (file) => {
        const res = await fetch(`/posts/${file}`);
        const text = await res.text();
        return { file, text };
      })
    ).then(setPosts);
  }, []);

  return (
    <div style={{ padding: '32px', fontFamily: 'sans-serif' }}>
      <h1>RavGrowth Blog</h1>
      {posts.map((post, i) => (
        <article key={i} style={{ marginBottom: '40px' }}>
          <ReactMarkdown>{post.text}</ReactMarkdown>
        </article>
      ))}
    </div>
  );
}
