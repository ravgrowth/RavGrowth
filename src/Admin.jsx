import { useEffect, useState } from 'react'
import supabase from './supabaseClient'

export default function Admin() {
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      const email = data?.user?.email
      if (email === 'your@email.com') setAllowed(true)
    })
  }, [])

  if (!allowed) return <p>Not allowed</p>

  return (
    <div>
      <h1>Admin</h1>
      <button onClick={async () => {
        const session = await supabase.auth.getSession()
        const token = session.data.session.access_token
        await fetch('/api/send-bulk', {
          headers: { Authorization: `Bearer ${token}` }
        })
      }}>
        Send bulk email
      </button>
    </div>
  )
}
