import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom'
import { useEffect, useState, lazy, Suspense } from 'react'
import supabase from './supabaseClient'
import ExternalRedirect from "./ExternalRedirect";

// Lazy load everything
const Home = lazy(() => import('./Home'))
const Blog = lazy(() => import('./Blog'))
const BlogPost = lazy(() => import('./BlogPost'))
const Layout = lazy(() => import('./Layout'))
const Contact = lazy(() => import('./Contact'))
const Admin = lazy(() => import('./Admin'))
const SimpleLogin = lazy(() => import('./SimpleLogin'))
const Newsletter = lazy(() => import('./Newsletter'))
const About = lazy(() => import('./About'))

function AppWrapper() {
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

  if (loading) return <div>Loading...</div>

  const routes = [
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/blog", element: <Blog /> },
        { path: "/blog/:slug", element: <BlogPost /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        {
          path: "/admin",
          element: session
            ? (console.log("🟢 Authenticated"), <Admin />)
            : (console.log("🔴 No session"), <Navigate to="/login" />)
        },
        { path: "/login", element: <SimpleLogin /> },
        { path: "/newsletter", element: <Newsletter /> },

        // ✅ External redirect
        { path: "/signup", element: <ExternalRedirect /> },

        { path: "*", element: <div>404 Not Found</div> }
      ]
    }
  ];

  const router = createBrowserRouter(routes, {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  })

  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default AppWrapper
