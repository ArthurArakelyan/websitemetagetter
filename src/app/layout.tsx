import { Rubik } from 'next/font/google';
import { Metadata } from 'next';

import Header from '@/components/common/Header';
import Main from '@/components/common/Main';

import mainTitle from '@/constants/mainTitle';

import './globals.scss';

const rubik = Rubik({
  style: 'normal',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: mainTitle,
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en" data-theme="light">
      <head>
        <meta name="author" content="Arthur Arakelyan" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={rubik.className}>
        <Header />

        <Main>
          {children}
        </Main>

        <footer>Footer</footer>
      </body>
    </html>
  );
};

export default RootLayout;
