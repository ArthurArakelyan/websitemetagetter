import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import WebsiteInput from '../../../components/shared/WebsiteInput';

import getWebsiteMeta from '@/utilities/getWebsiteMeta';

import getUrlWithQuery from '@/helpers/getUrlWithQuery';

import { urlRegexp } from '@/constants/validation';
import { defaultOpenGraph, mainTitle } from '@/constants/seo';

import styles from './Website.module.scss';

import { IWebsitePageProps } from './types';

const getWebsite = async (url: IWebsitePageProps['params']['url'], searchParams: IWebsitePageProps['searchParams']) => {
  try {
    const urlWithQuery = getUrlWithQuery(url, searchParams);

    if (!urlRegexp.test(urlWithQuery)) {
      return notFound();
    }

    const response = await fetch(urlWithQuery, { cache: 'no-store' });

    const data = await response.text();

    const meta = getWebsiteMeta(data);

    if (!meta) {
      return notFound();
    }

    return meta;
  } catch (error: any) {
    console.error(error);

    return notFound();
  }
};

export async function generateMetadata(
  { params, searchParams }: IWebsitePageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const website = await getWebsite(params.url, searchParams);
  const websiteTitle = website.og.title || website.title;

  const title = `${websiteTitle} Metadata | ${mainTitle}`;
  const description = `The metadata of ${websiteTitle} website.`;
  const url = `/website/${params.url}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...defaultOpenGraph,
      title,
      description,
      url,
    },
  };
}

const Website = async ({ params, searchParams }: IWebsitePageProps) => {
  const website = await getWebsite(params.url, searchParams);

  return (
    <div className={styles['website']}>
      <WebsiteInput initialUrl={getUrlWithQuery(params.url, searchParams)} />

      <h1 className={styles['website__title']}>
        {website.og.title || website.title}
      </h1>

      <pre style={{ marginTop: '30px', whiteSpace: 'pre-wrap', lineHeight: '1.5rem' }}>
        {JSON.stringify(website, undefined, 2)}
      </pre>
    </div>
  );
};

export default Website;
