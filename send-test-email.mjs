import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { fromEnv } from '@aws-sdk/credential-providers';
import 'dotenv/config';

const ses = new SESClient({
  region: 'us-east-1',
  credentials: fromEnv(),
});

const run = async () => {
  try {
    const command = new SendEmailCommand({
      Destination: {
        ToAddresses: ['contact@ravgrowth.com'],
      },
      Message: {
        Body: {
          Text: { Data: 'Test email from local script!' },
        },
        Subject: { Data: 'RavGrowth Test Email' },
      },
      Source: 'contact@ravgrowth.com',
    });

    const response = await ses.send(command);
    console.log('Email sent!', response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

run();
