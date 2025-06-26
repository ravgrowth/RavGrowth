window.supabase = supabase

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import BlogPost from './BlogPost'
import Layout from './Layout'
import Contact from './Contact'
import Admin from './Admin'
import SimpleLogin from './SimpleLogin'

function App() {
   const [session, setSession] = useState(null)
   const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setLoading(false)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  if (loading) return <div>Loading...</div> // optional: show spinner

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/admin"
            element={
              session
                ? (console.log('🟢 Authenticated, rendering Admin'), <Admin />)
                : (console.log('🔴 No session, redirecting to /login'), <Navigate to="/login" />)
            }
          />
          <Route path="/login" element={<SimpleLogin />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App