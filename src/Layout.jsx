import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: '20px',
          borderBottom: '1px solid #333',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap', // ✅ wraps on mobile
          gap: '16px',      // ✅ smaller gap for small screens
          textAlign: 'center',
        }}
      >
        <Link to="/" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>
          Home
        </Link>
        <Link to="/blog" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>
          Blog
        </Link>
        <a
          href="https://app.ravgrowth.com"
          style={{ color: 'var(--color-text)', textDecoration: 'none' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          RavBot
        </a>
        <Link to="/contact" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>
          Contact
        </Link>
      </header>

      {/* Page Content */}
      <main style={{ flex: 1, padding: '32px', width: '100%', boxSizing: 'border-box' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: '20px',
          borderTop: '1px solid #333',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#aaa',
        }}
      >
        <p>© {new Date().getFullYear()} RavGrowth. Built to automate wealth.</p>
        <p>
          <a href="mailto:contact@ravgrowth.com" style={{ color: '#aaa', textDecoration: 'underline' }}>
            contact@ravgrowth.com
          </a>
        </p>
      </footer>
    </div>
  )
}
