import { Rubik } from 'next/font/google';

import './globals.scss';

import styles from './layout.module.scss';

const rubik = Rubik({
  style: 'normal',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <head>
        <title>Website Meta Getter</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Arthur Arakelyan" />
        <meta name="theme-color" content="#081e3b" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={rubik.className}>
        <header>Header</header>

        <main id="main" className={styles['main']}>
          {children}
        </main>

        <footer>Footer</footer>
      </body>
    </html>
  );
};

export default RootLayout;
