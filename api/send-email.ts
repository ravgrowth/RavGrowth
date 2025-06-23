import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { to, subject, message } = req.body;

  try {
    const params = {
      Destination: { ToAddresses: [to] },
      Message: {
        Body: { Text: { Data: message } },
        Subject: { Data: subject },
      },
      Source: 'contact@ravgrowth.com',
    };

    const command = new SendEmailCommand(params);
    await ses.send(command);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('SES error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
