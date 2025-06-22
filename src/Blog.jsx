import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/posts/index.json')
      .then((res) => res.json())
      .then(setPosts)
  }, [])

  return (
    <div>
      <h1>RavGrowth Blog</h1>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  )
}

export default Blog
