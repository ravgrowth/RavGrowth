// /api/send-bulk.js (or .ts if you're using TypeScript)
import { createClient } from '@supabase/supabase-js'
import AWS from 'aws-sdk'
import { testBulkEmail } from '../src/emailTemplates.js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

AWS.config.update({ region: 'us-east-1' })

const ses = new AWS.SES({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

export default async function handler(req, res) {
  const { data, error } = await supabase.from('signups').select('email')

  if (error) return res.status(500).json({ error })

  const emails = data.map((row) => row.email)

  const sendAll = await Promise.all(
    emails.map((to) =>
      ses
        .sendEmail({
          Source: 'contact@ravgrowth.com',
          Destination: { ToAddresses: [to] },
          Message: {
            Subject: { Data: '🔥 Your Wealth Task is Here' },
            Body: {
              Text: {
                Data: `You signed up for RavBot wealth tasks. Here's your first one:\n\n→ Move $100 from checking to HYSA.\n\nMore coming soon.`,
              },
            },
          },
        })
        .promise()
    )
  )

  res.status(200).json({ sent: sendAll.length })
}
