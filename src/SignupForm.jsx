import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

export default function SignupForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Saving...')

    // Save to Supabase
    const { error } = await supabase.from('signups').insert([
      { email, source: 'main-site' }
    ])

    if (error) {
      console.error('Supabase error:', error)
      setStatus('Error saving email.')
      return
    }

    setStatus('Sending email...')

    // Send email via SES
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: email,
        subject: 'Welcome to RavGrowth!',
        message: 'Thanks for signing up — your wealth journey starts now!'
      })
    })

    if (res.ok) {
      setStatus('Signup complete! Check your inbox.')
      setEmail('')
    } else {
      setStatus('Error sending email.')
    }
  }

  return (
  <div style={{ marginTop: '20px' }}>
    <p style={{ color: 'white', marginBottom: '8px', fontSize: '16px'}}>
      Be first to know about new features and Rav Growth developments.
    </p>

    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        required
        style={{ padding: '10px', fontSize: '16px', width: '300px' }}
      />
      <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px' }}>
        Sign Up
      </button>
      <div style={{ marginTop: '10px', color: 'white' }}>{status}</div>
    </form>
  </div>
)}