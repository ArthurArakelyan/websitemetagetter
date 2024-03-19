import { Metadata } from 'next';

import { getSitemap } from '@/app/sitemap';

import { defaultOpenGraph, mainTitle } from '@/constants/seo';

import styles from './Links.module.scss';

const title = `Links | ${mainTitle}`;
const description = `Sitemap of ${mainTitle}`;
const canonical = '/links';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'website, meta, getter, links, sitemap',
  alternates: {
    canonical: canonical,
  },
  openGraph: {
    ...defaultOpenGraph,
    title,
    description,
    url: canonical,
  },
};

const Links = async () => {
  const links = await getSitemap();

  return (
    <div className={styles['links']}>
      <div className={styles['links__header']}>
        <h1 className={styles['links__header-title']}>
          Links / Sitemap
        </h1>
      </div>

      <div className={styles['links__content']}>
        {links.map((link) => {
          return (
            <a key={link.url} href={link.url} className={styles['links__link']}>
              {link.url}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Links;
