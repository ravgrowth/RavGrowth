import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { welcomeEmail } from "../lib/emailTemplates.js"; // adjust path if needed

const sesClient = new SESClient({
  region: "us-east-1", // or your SES region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { to } = req.body;

  const params = {
    Destination: { ToAddresses: [to] },
    Message: {
      Body: { Text: { Data: welcomeEmail.body }},
      Subject: { Data: welcomeEmail.subject }
    },
    Source: "bot@ravgrowth.com" // must match verified sender
  };

  try {
    const command = new SendEmailCommand(params);
    const response = await sesClient.send(command);

    console.log("Email sent:", response);
    return res.status(200).json({ message: 'Email sent!' });
  } catch (error) {
    console.error("SES send error:", error);
    return res.status(500).json({ message: 'Email failed', error: error.message });
  }
}
