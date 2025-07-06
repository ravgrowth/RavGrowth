import { useEffect, useState } from 'react'
import supabase from './supabaseClient'

export default function EmailPopup({ delay = 5000 }) {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log('📥 Submitting email:', email)

        // Save to Supabase
        const { error } = await supabase.from('signups').insert([{ email }])
        if (error) {
            console.error('❌ Supabase insert error:', error)
            alert('Error signing up. Try again.')
            return
        }

        console.log('✅ Saved to Supabase')

        // Call welcome email endpoint
        const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        })

        const result = await res.json()
        console.log('📤 Email API response:', result)

        setSubmitted(true)

        setTimeout(() => {
            setShow(false)
        }, 2000)
    }

  if (!show) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <div style={{
        background: '#111',
        padding: '2rem',
        borderRadius: '12px',
        maxWidth: '400px',
        width: '90%',
        textAlign: 'center',
        color: '#fff',
        boxShadow: '0 0 24px rgba(255, 255, 255, 0.1)'
      }}>
        {submitted ? (
          <p>✅ Thanks! You’re on the list.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>💌 Join the list</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              required
              style={{ width: '95%', padding: '0.5rem', marginTop: '1rem' }}
            />
            <br />
            <button type="submit" style={{
                width: '100%',
                padding: '0.5rem',
                marginTop: '1rem',
                backgroundColor: '#000',
                color: '#fff',
                border: '1px solid #333',
                borderRadius: '6px'
            }}>
              Sign up
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
