import { subscribeEmailGoogleSheer } from '@/utils';
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
      await subscribeEmailGoogleSheer(data);
    } catch (error) {
      console.log({ error });
    }
    res.status(200).json({ message: 'Data appended to Google Sheet' });
  } else {
    // Handle any other HTTP method
  }
  res.status(200).json({ message: 'Hello from Next.js!' });
}
