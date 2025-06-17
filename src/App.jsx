import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './blog';
import Home from './home'; // if you don't have Home.jsx yet, I'll give it below

export default function App() {
  return (
    <Router>
      <nav style={{ padding: '16px', display: 'flex', gap: '16px', background: '#f0f0f0' }}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}
