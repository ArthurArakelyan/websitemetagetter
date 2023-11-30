import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import WebsiteInput from '@/components/shared/WebsiteInput';
import MetaTag from '@/components/pages/website-meta/MetaTag';
import WebsiteResources from '@/components/pages/website-meta/WebsiteResources';
import TitleIcon from '@/components/UI/Icons/TitleIcon';
import DescriptionIcon from '@/components/UI/Icons/DescriptionIcon';
import KeywordIcon from '@/components/UI/Icons/KeywordIcon';
import ColorIcon from '@/components/UI/Icons/ColorIcon';
import LinkIcon from '@/components/UI/Icons/LinkIcon';
import WebIcon from '@/components/UI/Icons/WebIcon';
import ImageIcon from '@/components/UI/Icons/ImageIcon';
import VideoIcon from '@/components/UI/Icons/VideoIcon';
import CardIcon from '@/components/UI/Icons/CardIcon';

import getWebsiteMeta from '@/utilities/getWebsiteMeta';

import getUrlWithQuery from '@/helpers/getUrlWithQuery';
import checkString from '@/helpers/checkString';
import checkNonNullableObject from '@/helpers/checkNonNullableObject';

import { urlRegexp } from '@/constants/regexp';
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

    if (
      !meta ||
      (!checkString(meta.title) && !checkString(meta.og.title) && !checkString(meta.twitter.title))
    ) {
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
  const description = `Found metadata results of ${websiteTitle} website.`;
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

  const hasOg = checkNonNullableObject(website.og);
  const hasTwitter = checkNonNullableObject(website.twitter);

  return (
    <div className={styles['website']}>
      <WebsiteInput initialUrl={getUrlWithQuery(params.url, searchParams)} className={styles['website__input']} />

      <h1 className={styles['website__title']}>
        {website.og.title || website.title}
      </h1>

      <div id="meta" className={styles['website__meta-tags']}>
        <h2 className={styles['website__meta-tags-title']}>
          Meta tags
        </h2>

        <ul className={styles['website__meta-tags-list']}>
          {checkString(website.title) && (
            <MetaTag
              id="meta-title"
              title="Title"
              content={website.title}
              icon={TitleIcon}
            />
          )}

          {checkString(website.description) && (
            <MetaTag
              id="meta-description"
              title="Description"
              content={website.description}
              icon={DescriptionIcon}
            />
          )}

          {checkString(website.keywords) && (
            <MetaTag
              id="meta-keywords"
              title="Keywords"
              content={website.keywords}
              icon={KeywordIcon}
            />
          )}

          {checkString(website.themeColor) && (
            <MetaTag
              id="meta-theme-color"
              title="Theme color"
              content={website.themeColor}
              icon={ColorIcon}
              color={website.themeColor}
            />
          )}
        </ul>
      </div>

      {hasOg && (
        <div id="og" className={styles['website__meta-tags']}>
          <h2 className={styles['website__meta-tags-title']}>
            Open graph meta tags
          </h2>

          <ul className={styles['website__meta-tags-list']}>
            {checkString(website.og.title) && (
              <MetaTag
                id="og-title"
                title="Title"
                content={website.og.title}
                icon={TitleIcon}
              />
            )}

            {checkString(website.og.description) && (
              <MetaTag
                id="og-description"
                title="Description"
                content={website.og.description}
                icon={DescriptionIcon}
              />
            )}

            {checkString(website.og.url) && (
              <MetaTag
                id="og-url"
                title="URL"
                url={website.og.url}
                icon={LinkIcon}
              />
            )}

            {checkString(website.og.siteName) && (
              <MetaTag
                id="og-site-name"
                title="Site name"
                content={website.og.siteName}
                icon={WebIcon}
              />
            )}

            {checkString(website.og.image.url) && (
              <MetaTag
                id="og-image"
                icon={ImageIcon}
                title="Image"
                url={website.og.image.url}
                image={{
                  url: website.og.image.url,
                  alt: website.og.image.alt || website.og.title || website.title,
                  width: website.og.image.width || undefined,
                  height: website.og.image.height || undefined,
                }}
              />
            )}

            {checkString(website.og.video.url) && (
              <MetaTag
                id="og-video"
                icon={VideoIcon}
                title="Video"
                url={website.og.video.url}
                iframe={website.og.video.type === 'text/html' ? {
                  url: website.og.video.url,
                  width: website.og.video.width || undefined,
                  height: website.og.video.height || undefined,
                } : undefined}
                video={(!checkString(website.og.video.type) || website.og.video.type === 'video/mp4' || website.og.video.type === 'video/mpeg') ? {
                  url: website.og.video.url,
                  type: website.og.video.type || 'video/mp4',
                  width: website.og.video.width || undefined,
                  height: website.og.video.height || undefined,
                } : undefined}
              />
            )}
          </ul>
        </div>
      )}

      {hasTwitter && (
        <div id="twitter" className={styles['website__meta-tags']}>
          <h2 className={styles['website__meta-tags-title']}>
            Twitter meta tags
          </h2>

          <ul className={styles['website__meta-tags-list']}>
            {checkString(website.twitter.card) && (
              <MetaTag
                id="twitter-card"
                title="Card"
                content={website.twitter.card}
                icon={CardIcon}
              />
            )}

            {checkString(website.twitter.site) && (
              <MetaTag
                id="twitter-site"
                title="Site"
                content={website.twitter.site}
                url={`https://x.com/${website.twitter.site}`}
                icon={WebIcon}
              />
            )}

            {checkString(website.twitter.creator) && (
              <MetaTag
                id="twitter-creator"
                title="Creator"
                content={website.twitter.creator}
                url={`https://x.com/${website.twitter.creator}`}
                icon={WebIcon}
              />
            )}

            {checkString(website.twitter.title) && (
              <MetaTag
                id="twitter-title"
                title="Title"
                content={website.twitter.title}
                icon={TitleIcon}
              />
            )}

            {checkString(website.twitter.description) && (
              <MetaTag
                id="twitter-description"
                title="Description"
                content={website.twitter.description}
                icon={DescriptionIcon}
              />
            )}

            {checkString(website.twitter.image.url) && (
              <MetaTag
                id="twitter-image"
                icon={ImageIcon}
                title="Image"
                url={website.twitter.image.url}
                image={{
                  url: website.twitter.image.url,
                  alt: website.twitter.image.alt || website.twitter.title || website.og.title || website.title,
                  width: website.twitter.image.width || undefined,
                  height: website.twitter.image.height || undefined,
                }}
              />
            )}
          </ul>
        </div>
      )}

      <WebsiteResources
        website={website}
        hasOg={hasOg}
        hasTwitter={hasTwitter}
      />
    </div>
  );
};

export default Website;
