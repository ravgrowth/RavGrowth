import Layout from '../components/Layout'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

// 🔥 Preload all markdown files
const markdownFiles = import.meta.glob('../blog/*.md')

function BlogPost() {
  const { slug } = useParams()
  const [content, setContent] = useState('')

  useEffect(() => {
    const path = `../blog/${slug}.md`
    const importer = markdownFiles[path]

    if (importer) {
      importer()
        .then(module => fetch(module.default))
        .then(res => res.text())
        .then(setContent)
        .catch(() => setContent('# Error loading blog'))
    } else {
      setContent('# Not found')
    }
  }, [slug])

  return (
    <Layout>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Layout>
  )
}
export default BlogPost
