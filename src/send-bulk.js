// /api/send-bulk.js
import { createClient } from '@supabase/supabase-js'
import AWS from 'aws-sdk'
import { testBulkEmail } from '../src/emailTemplates.js'

// ✅ Use Supabase *Service Role* key for backend checks
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

AWS.config.update({ region: 'us-east-1' })

const ses = new AWS.SES({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

export default async function handler(req, res) {
  // 🔐 Step 1: Check Authorization header
  const authHeader = req.headers.authorization || ''
  const token = authHeader.replace('Bearer ', '')

  const { data: { user }, error: userError } = await supabase.auth.getUser(token)

  if (userError || !user || user.email !== 'contact@ravgrowth.com') {
    return res.status(401).json({ error: 'Not authorized' })
  }

  // ✅ Step 2: Fetch all emails from 'signups'
  const { data, error } = await supabase.from('signups').select('email')
  if (error) return res.status(500).json({ error })

  const emails = data.map((row) => row.email)

  // ✅ Step 3: Send to all via SES
  const sendAll = await Promise.all(
    emails.map((to) =>
      ses
        .sendEmail({
          Source: 'contact@ravgrowth.com',
          Destination: { ToAddresses: [to] },
          Message: {
            Subject: { Data: testBulkEmail.subject },
            Body: {
              Text: { Data: testBulkEmail.body },
            },
          },
        })
        .promise()
    )
  )

  res.status(200).json({ sent: sendAll.length })
}
