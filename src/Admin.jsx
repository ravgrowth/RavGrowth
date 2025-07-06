import { useEffect, useState } from 'react'
import supabase from './supabaseClient'

export default function Admin() {
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      const email = data?.user?.email
      if (email === 'contact@ravgrowth.com') setAllowed(true)
    })
  }, [])

  if (!allowed) return <p>Not allowed</p>

  return (
    <div>
      <h1>Admin</h1>
      <button onClick={async () => {
        const confirmSend = confirm("Are you sure you want to send emails? This will send emails to everyone on the list.")

        if (!confirmSend) return

        const session = await supabase.auth.getSession()
        const token = session.data.session.access_token

        const res = await fetch('/api/send-bulk', {
          headers: { Authorization: `Bearer ${token}` }
        })

        const result = await res.json()
        alert(`✅ Sent "${result.subject || 'your email'}" to ${result.sent || 0} emails successfully.`)
      }}>
        Send bulk email
      </button>
    </div>
  )
}
