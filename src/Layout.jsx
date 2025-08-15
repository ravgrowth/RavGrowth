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
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <nav
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              maxWidth: '600px',
              width: '100%',
            }}
          >
            <Link to="/" style={{ color: 'white' }}>Home</Link>
            <Link to="/blog" style={{ color: 'white' }}>Blog</Link>
            <a href="https://app.ravgrowth.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>RavBot</a>
            <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
            <Link to="/newsletter" style={{ color: 'white' }}>Newsletter</Link>
          </nav>
        </header>

      {/* Page Content */}
      <main
  style={{
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0',
    boxSizing: 'border-box',
  }}
>
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
