import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import BlogPost from './BlogPost'

function App() {
  return (
    <div style={{
      backgroundColor: 'var(--color-bg)',
      color: 'var(--color-text)',
      minHeight: '100vh',
    }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
