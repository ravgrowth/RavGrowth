import { Link } from 'react-router-dom'

function Layout({ children }) {
  return (
    <div style={{ padding: '1rem' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      {children}
    </div>
  )
}
export default Layout
