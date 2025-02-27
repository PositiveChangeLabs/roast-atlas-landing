import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import './globals.css';

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: '--font-roboto-condensed',
  preload: true
});

export const metadata: Metadata = {
  title: 'Roast Atlas',
  description: 'Something is brewing...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${robotoCondensed.variable}`}>{children}</body>
    </html>
  );
}
