// /api/send-bulk.js
import AWS from 'aws-sdk'
import { testBulkEmail } from '../lib/emailTemplates.js'

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
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
      if (!data || !Array.isArray(data)) {
        throw new Error('No data returned from signups table')
      }
        console.log('✅ Emails pulled from Supabase:', data)


          const emails = [...new Set(data.map(row => row.email))] // removes duplicates

          const sendAll = await Promise.all(
            emails.map(async (to) => {
              try {
                console.log('📤 Sending to:', to)
                return await ses.sendEmail({
                  Source: 'contact@ravgrowth.com',
                  Destination: { ToAddresses: [to] },
                  Message: {
                    Subject: { Data: testBulkEmail.subject },
                    Body: { Text: { Data: testBulkEmail.body } },
                  },
                }).promise()
              } catch (err) {
                console.error('❌ Failed to send to', to, err.message)
                return null
              }
            })
          )


    res.status(200).json({ sent: sendAll.length })

  } catch (err) {
    console.error('🔥 EMAIL SEND ERROR:', err)
    res.status(500).json({ error: err.message || 'Unknown error' })
  }
}
