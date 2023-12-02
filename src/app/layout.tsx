import { Rubik } from 'next/font/google';
import { Metadata } from 'next';

import Header from '@/components/common/Header';
import Main from '@/components/common/Main';
import Footer from '@/components/common/Footer';
import ThemeProvider from '@/context/ThemeProvider';

import { defaultOpenGraph, mainDescription, mainTitle, url } from '@/constants/seo';

import './globals.scss';

const rubik = Rubik({
  style: 'normal',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: mainTitle,
  description: mainDescription,
  keywords: 'website, webpage, meta, getter, meta, checker, tag, open, graph, seo',
  metadataBase: new URL(url),
  openGraph: defaultOpenGraph,
  twitter: {
    card: 'summary_large_image',
  },
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Arthur Arakelyan" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-site-verification" content="NnQ3jdufTEVEzccmFj_iHSm8ytzg9mPK8EKnC7kMQsM" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/logo64.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/logo128.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo180.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={rubik.className}>
        <ThemeProvider>
          <Header />

          <Main>
            {children}
          </Main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
