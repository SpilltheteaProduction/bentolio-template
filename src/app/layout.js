import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import Global from '@/components/Global';
import './globals.css';

export const metadata = {
  title: 'Spill the tea Production',
  description:
    'Spill the tea Production is a creative film production company specializing in feel-good short-films.',
};

const fontHeading = localFont({
  src: '../../public/fonts/Unblocker.ttf',
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Inter({
  weight: ['300', '400', '500'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export default function RootLayout({ children }) {
  return (
    <html lang='fr' className='hide-scrollbar'>
      <body
        className={`${fontHeading.variable} ${fontBody.variable} antialiased`}
      >
        <Global />
        {children}
      </body>
    </html>
  );
}
