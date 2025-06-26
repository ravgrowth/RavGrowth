import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import BlogPost from './BlogPost'
import Layout from './Layout'
import Contact from './Contact'
import Admin from './Admin'
import SimpleLogin from './SimpleLogin'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<SimpleLogin />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
