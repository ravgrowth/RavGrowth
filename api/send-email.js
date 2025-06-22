// /api/send-email.js
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

const sesClient = new SESClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { to, subject, message } = req.body

  const params = {
    Source: 'contact@ravgrowth.com',
    Destination: { ToAddresses: [to] },
    Message: {
      Subject: { Data: subject },
      Body: {
        Html: { Data: `<p>${message}</p>` },
        Text: { Data: message }
      }
    }
  }

  try {
    await sesClient.send(new SendEmailCommand(params))
    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('SES error:', err)
    return res.status(500).json({ error: err.message })
  }
}
