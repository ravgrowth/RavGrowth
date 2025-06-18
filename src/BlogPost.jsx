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
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

export default BlogPost
