import { useState, useEffect } from 'react'
import supabase from './supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function SimpleLogin() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getSession() // force token parsing from URL

    const hash = window.location.hash
      if (hash.includes('access_token')) {
        supabase.auth._recoverSessionFromUrl(hash).then(({ data, error }) => {
          if (data?.session) {
            window.history.replaceState({}, document.title, '/login')
            navigate('/admin')
          }
        })
      }

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('🔥 AUTH CHANGE:', event, session)
      if (event === 'SIGNED_IN' && session) {
        navigate('/admin')
      }
    })

    return () => listener.subscription.unsubscribe()
  }, [navigate])

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (!error) setSent(true)
    else alert(error.message)
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
      {sent ? <p>Check your email!</p> : (
        <>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
          <button onClick={handleLogin}>Send Link</button>
        </>
      )}
    </div>
  )
}
