import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import BlogPost from './BlogPost'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
