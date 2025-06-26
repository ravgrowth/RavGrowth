// /api/send-bulk.js
import { createClient } from '@supabase/supabase-js'
import AWS from 'aws-sdk'
import { testBulkEmail } from '../lib/emailTemplates.js'

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
  try {
    const { data, error } = await supabase.from('signups').select('email')
    if (error) throw error

    const emails = data.map((row) => row.email)

    const sendAll = await Promise.all(
      emails.map((to) => {
        console.log('Sending to:', to)
        return ses.sendEmail({
          Source: 'contact@ravgrowth.com',
          Destination: { ToAddresses: [to] },
          Message: {
            Subject: { Data: testBulkEmail.subject },
            Body: { Text: { Data: testBulkEmail.body } },
          },
        }).promise()
      })
    )

    res.status(200).json({ sent: sendAll.length })

  } catch (err) {
    console.error('🔥 EMAIL SEND ERROR:', err)
    res.status(500).json({ error: err.message || 'Unknown error' })
  }
}
