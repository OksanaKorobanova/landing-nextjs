import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Landing Page',
  description:
    'Next.js Landing Page with Framer Motion. Built by Oksana Korobanova',
};

const dmSans = DM_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${dmSans.className} antialiased bg-[#EAEEFE]`}>
        {children}
      </body>
    </html>
  );
}
