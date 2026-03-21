import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import Global from '@/components/Global';
import './globals.css';

export const metadata = {
  title: 'Bentolio',
  description:
    'Bentolio is a clean and customizable portfolio template built on Bento Grids, perfect for showcasing your work.',
};

const fontHeading = localFont({
  src: '../../public/fonts/Unblocker.ttf',
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Inter({
  weight: ['300', '500'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='hide-scrollbar'>
      <body
        className={`${fontHeading.variable} ${fontBody.variable} antialiased`}
      >
        <Global />
        {children}
      </body>
    </html>
  );
}
