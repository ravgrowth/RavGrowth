import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import 'dotenv/config';

const ses = new SESClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const run = async () => {
  try {
    const command = new SendEmailCommand({
      Destination: {
        ToAddresses: ['ravgrobusiness@gmail.com'], // your email
      },
      Message: {
        Body: {
          Text: { Data: 'Test email from local script!' },
        },
        Subject: { Data: 'RavGrowth Test Email' },
      },
      Source: 'contact@ravgrowth.com', // your verified sender
    });

    const response = await ses.send(command);
    console.log('Email sent!', response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

run();
