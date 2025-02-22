import { likeGoogleSheet } from '@/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    try {
      await likeGoogleSheet();
    } catch (error) {
      console.log({ error });
    }
    res.status(200).json({ message: 'Data appended to Google Sheet' });
  } else {
    // Handle any other HTTP method
  }
}
