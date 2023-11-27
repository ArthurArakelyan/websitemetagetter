import { Rubik } from 'next/font/google';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

import Header from '@/components/common/Header';
import Main from '@/components/common/Main';
import Footer from '@/components/common/Footer';
import ThemeProvider from '@/context/ThemeProvider';

import getSafeTheme from '@/helpers/getSafeTheme';

import mainTitle from '@/constants/mainTitle';
import url from '@/constants/url';
import { themeStorageKey } from '@/constants/storageKeys';

import './globals.scss';

const rubik = Rubik({
  style: 'normal',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const description = `A powerful free tool that checks Meta Tags of any website. Make higher rankings in search engines for your website by using this online tool.`;

export const metadata: Metadata = {
  title: mainTitle,
  description: description,
  keywords: 'website, webpage, meta, getter, meta, checker, tag, open, graph, seo',
  metadataBase: new URL(url),
  openGraph: {
    title: mainTitle,
    description: description,
    url: '/',
    type: 'website',
    images: {
      url: `${url}/images/og.png`,
      alt: mainTitle,
      width: 1260,
      height: 630,
    },
    siteName: mainTitle,
    locale: 'en',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const theme = getSafeTheme(cookies().get(themeStorageKey)?.value);

  return (
    <html lang="en" data-theme={theme}>
      <head>
        <meta name="author" content="Arthur Arakelyan" />
        <meta name="theme-color" content={theme === 'dark' ? '#202020' : '#ffffff'} />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/logo64.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/logo128.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo180.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={rubik.className}>
        <ThemeProvider theme={theme}>
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
