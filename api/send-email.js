import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { welcomeEmail } from "../lib/emailTemplates.js"; // adjust path if needed

const sesClient = new SESClient({
  region: "us-east-1", // or your SES region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

// this whole thing is how to send the welcome email

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' })

  const { email } = req.body
  console.log("👀 Email in body:", email)

  if (!email || !email.includes('@')) {
    console.error("❌ Invalid email:", email)
    return res.status(400).json({ message: 'Invalid recipient email' })
  }

  const params = {
    Destination: { ToAddresses: [email] },
    Message: {
      Subject: { Data: welcomeEmail.subject, Charset: "UTF-8" },
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: welcomeEmail.body
        }
      }
    },
    Source: "bot@ravgrowth.com"
  }

  try {
    const command = new SendEmailCommand(params)
    const response = await sesClient.send(command)
    console.log("✅ Email sent:", response)
    return res.status(200).json({ message: 'Email sent!' })
  } catch (error) {
    console.error("🔥 SES send error:", error)
    return res.status(500).json({ message: 'Email failed', error: error.message })
  }
}

