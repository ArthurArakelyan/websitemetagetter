import type { Metadata } from 'next';

export const mainTitle = 'Website Meta Getter';

export const mainDescription = `A powerful free tool that checks Meta Tags of any website. Make higher rankings in search engines for your website by using this online tool.`;

export const url = 'https://websitemetagetter.vercel.app';

export const defaultOpenGraph: Metadata['openGraph'] = {
  title: mainTitle,
  description: mainDescription,
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
};
