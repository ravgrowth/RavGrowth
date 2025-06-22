// /api/send-email.js

import AWS from 'aws-sdk'

const ses = new AWS.SES({
  region: 'us-east-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed')
  }

  const { to } = req.body

  const subject = 'Welcome to RavGrowth!'
  const message = `
Hi there,

Thanks for signing up for RavGrowth!

You will start getting updates soon.

If you did not sign up, you can ignore this email.

- The RavGrowth Team
`

  try {
    await ses.sendEmail({
      Destination: { ToAddresses: [to] },
      Message: {
        Body: { Text: { Data: message } },
        Subject: { Data: subject }
      },
      Source: 'contact@ravgrowth.com'
    }).promise()

    res.status(200).send('Email sent')
  } catch (err) {
    console.error('SES error:', err)
    res.status(500).send('Error sending email')
  }
}
