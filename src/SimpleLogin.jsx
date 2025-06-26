// SimpleLogin.jsx
import { useState } from 'react'
import supabase from './supabaseClient'

export default function SimpleLogin() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email }) // sends magic email link
    if (!error) setSent(true)
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
          />
          <button onClick={handleLogin}>Send Link</button>
        </>
      )}
    </div>
  )
}
