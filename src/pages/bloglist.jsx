import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function BlogList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const files = import.meta.glob('../blog/*.md')

    const slugToTitle = {
      'passive-income-fake-or-nah': 'Is Passive Income Fake... or Nah?',
      'what-is-rav-growth': 'What Is Rav Growth?'
    }

    const parsedPosts = Object.keys(files).map(path => {
      const slug = path.split('/').pop().replace('.md', '')
      const title = slugToTitle[slug] || slug
      return { slug, title }
    })

    setPosts(parsedPosts)
  }, [])

  return (
    <Layout>
      <h2>RavGrowth Blog</h2>
      <ul>
        {posts.map(({ slug, title }) => (
          <li key={slug}>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogList
