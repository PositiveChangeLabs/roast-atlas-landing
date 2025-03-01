import { subscribeEmailGoogleSheet, sendEmail } from '@/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    const data = req.body;
    try {
      await subscribeEmailGoogleSheet(data);
      // Send email notification
      const emailResult = await sendEmail(
          data.email,
          'Subscription Confirmation',
          'Thank you for subscribing! Your details have been recorded.'
      );

      if (!emailResult.success) {
        return res.status(500).json({ message: `Google Sheet updated, but email failed: ${emailResult.message}` });
      }
      return res.status(200).json({ message: 'Data appended to Google Sheet and email sent'});
    } catch (error) {
      console.log({ error });
    }
  } else {
    // Handle any other HTTP method
  }
  res.status(200).json({ message: 'Hello from Next.js!' });
}
