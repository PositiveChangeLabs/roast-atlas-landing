import { subscribeEmailGoogleSheet } from '@/utils';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

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
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true', // Ensure boolean conversion
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: data.email,
        subject: '🎉 Welcome to Roast Atlas – Your Coffee Journey Begins! ☕',
        html: `
    <p>Hello Coffee Lover,</p>  

    <p>Welcome to <strong>Roast Atlas</strong>! 🎉 You've just taken the first step in joining a passionate community of specialty coffee enthusiasts, roasters, and cafes from around the world. 🌍☕</p>  

    <h3>🔥 What’s Brewing?</h3>  
    <p><strong>We’re creating the ultimate specialty coffee marketplace and discovery platform where you can:</strong></p>
    <ul>
      <li>✅ Explore specialty coffee cafes and top roasters near you</li>
      <li>✅ Search by country, city, or even find hidden gems on a map</li>
      <li>✅ Read and leave reviews on cafes and coffee varieties</li>
      <li>✅ Connect with cafes offering job opportunities in the coffee industry</li>
      <li>✅ Stay updated on coffee events, workshops, and tasting sessions</li>
      <li>✅ Enjoy curated blogs and expert coffee insights</li>
      <li>✅ Subscribe to freshly roasted coffee, delivered straight to your door</li>
    </ul>  

    <h3>🚀 What’s Next?</h3>  
    <p>We’re hard at work perfecting the experience, and as an early subscriber, you’ll get:</p>
    <ul>
      <li>✨ Exclusive sneak peeks before we launch</li>
      <li>✨ Early access to limited features and beta testing opportunities</li>
      <li>✨ Special coffee deals and offers from our partners</li>
    </ul>  

    <h3>☕ Want to Make Your Coffee Experience Even Better?</h3>  
    <p>We’d love to hear from you! Take a minute to tell us what you’d love to see in Roast Atlas. Your feedback helps shape the future of coffee discovery!</p>  

    <p>📢 <a href="https://form.typeform.com/to/d8NKOojG" target="_blank" rel="noopener noreferrer">Take Our Quick Coffee Survey, if you haven't yet!</a></p>  

    <p>Thank you for being part of this journey. Exciting things are coming your way! Stay tuned and keep brewing greatness. ☕</p>  

    <p><strong>Cheers,</strong><br/>The Roast Atlas Team</p>
  `
      });

      return res.status(200).json({ message: 'Data appended to Google Sheet and email sent'});
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({message: 'Internal Server Error' });
    }
  } else {
    // Handle any other HTTP method
  }
  res.status(200).json({ message: 'Hello from Roast atlas' });
}
