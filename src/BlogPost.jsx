import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

function BlogPost() {
  const { slug } = useParams()
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found")
        return res.text()
      })
      .then(setContent)
      .catch(() => setContent('# 404 - Article Not Found'))
  }, [slug])

  return (
  <main style={{ padding: '1rem', maxWidth: '720px', margin: 'auto' }}>
    {content ? (
      <ReactMarkdown>{content}</ReactMarkdown>
    ) : (
      <p>Loading...</p>
    )}
  </main>
)

}

export default BlogPost
