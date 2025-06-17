import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import Home from './Home'; // replace with your homepage component

export default function App() {
  return (
    <Router>
      <nav style={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>
        <a href="/" style={{ margin: '0 12px' }}>Home</a>
        <a href="/blog" style={{ margin: '0 12px' }}>Blog</a>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}
