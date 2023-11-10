import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';
import './ui/globals.css';

const poppins = Poppins({
  subsets: ['latin', 'devanagari'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Ahmed Afify | Portfolio',
  applicationName: 'Ahmed Afify | Portfolio',
  description:
    'Explore the work and skills of Ahmed Afify in web development, design, and more.',
  keywords:
    'web development, design, portfolio, projects, skills, react, react-native, mobile development',
  authors: [{name: 'Ahmed Afify'}],
  openGraph: {
    type: 'website',
    title: 'Ahmed Afify | Portfolio',
    siteName: 'Ahmed Afify | Portfolio',
    description:
      'Explore the work and skills of Ahmed Afify in web development, design, and more.',
    images: [{url: 'https://avatars.githubusercontent.com/u/87319048?v=4'}],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.className}`}>{children}</body>
    </html>
  );
}
