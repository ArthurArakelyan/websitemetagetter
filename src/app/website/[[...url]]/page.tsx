import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import WebsiteInput from '../../../components/shared/WebsiteInput';

import getWebsiteMeta from '@/utilities/getWebsiteMeta';

import getUrlWithQuery from '@/helpers/getUrlWithQuery';
import checkString from '@/helpers/checkString';

import { urlRegexp } from '@/constants/validation';
import { defaultOpenGraph, mainTitle } from '@/constants/seo';

import styles from './Website.module.scss';

import { IWebsitePageProps } from './types';
import checkNonNullableObject from '@/helpers/checkNonNullableObject';

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

  return (
    <div className={styles['website']}>
      <WebsiteInput initialUrl={getUrlWithQuery(params.url, searchParams)}/>

      <h1 className={styles['website__title']}>
        {website.og.title || website.title}
      </h1>

      <div id="meta" className={styles['website__meta-tags']}>
        <h2 className={styles['website__meta-tags-title']}>
          Meta tags
        </h2>

        <ul className={styles['website__meta-tags-list']}>
          {checkString(website.title) && (
            <li id="meta-title" className={styles['website__meta-tags-list-item']}>
              <h3 className={styles['website__meta-tags-list-item-title']}>
                Title
              </h3>

              <div className={styles['website__meta-tags-list-item-content']}>
                <p className={styles['website__meta-tags-list-item-content-text']}>
                  {website.title}
                </p>
              </div>
            </li>
          )}

          {checkString(website.description) && (
            <li id="meta-description" className={styles['website__meta-tags-list-item']}>
              <h3 className={styles['website__meta-tags-list-item-title']}>
                Description
              </h3>

              <div className={styles['website__meta-tags-list-item-content']}>
                <p className={styles['website__meta-tags-list-item-content-text']}>
                  {website.description}
                </p>
              </div>
            </li>
          )}

          {checkString(website.keywords) && (
            <li id="meta-keywords" className={styles['website__meta-tags-list-item']}>
              {/* TODO: # icon */}

              <h3 className={styles['website__meta-tags-list-item-title']}>
                Keywords
              </h3>

              <div className={styles['website__meta-tags-list-item-content']}>
                <p className={styles['website__meta-tags-list-item-content-text']}>
                  {website.keywords}
                </p>
              </div>
            </li>
          )}

          {checkString(website.themeColor) && (
            <li id="meta-theme-color" className={styles['website__meta-tags-list-item']}>
              {/* TODO: color picker icon */}

              <h3 className={styles['website__meta-tags-list-item-title']}>
                Theme color
              </h3>

              <div className={styles['website__meta-tags-list-item-content']}>
                <div
                  aria-hidden
                  style={{ backgroundColor: website.themeColor }}
                  className={styles['website__meta-tags-list-item-color']}
                />

                <p className={styles['website__meta-tags-list-item-content-text']}>
                  {website.themeColor}
                </p>
              </div>
            </li>
          )}
        </ul>
      </div>

      {checkNonNullableObject(website.og) && (
        <div id="og" className={styles['website__meta-tags']}>
          <h2 className={styles['website__meta-tags-title']}>
            Open graph meta tags
          </h2>

          <ul className={styles['website__meta-tags-list']}>
            {checkString(website.og.title) && (
              <li id="og-title" className={styles['website__meta-tags-list-item']}>
                <h3 className={styles['website__meta-tags-list-item-title']}>
                  Title
                </h3>

                <div className={styles['website__meta-tags-list-item-content']}>
                  <p className={styles['website__meta-tags-list-item-content-text']}>
                    {website.og.title}
                  </p>
                </div>
              </li>
            )}

            {checkString(website.og.description) && (
              <li id="og-description" className={styles['website__meta-tags-list-item']}>
                <h3 className={styles['website__meta-tags-list-item-title']}>
                  Description
                </h3>

                <div className={styles['website__meta-tags-list-item-content']}>
                  <p className={styles['website__meta-tags-list-item-content-text']}>
                    {website.og.description}
                  </p>
                </div>
              </li>
            )}

            {checkString(website.og.url) && (
              <li id="og-url" className={styles['website__meta-tags-list-item']}>
                <h3 className={styles['website__meta-tags-list-item-title']}>
                  URL
                </h3>

                <div className={styles['website__meta-tags-list-item-content']}>
                  <a
                    href={website.og.url}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className={styles['website__meta-tags-list-item-content-text']}
                  >
                    {website.og.url}
                  </a>
                </div>
              </li>
            )}

            {checkString(website.og.siteName) && (
              <li id="og-site-name" className={styles['website__meta-tags-list-item']}>
                <h3 className={styles['website__meta-tags-list-item-title']}>
                  Site name
                </h3>

                <div className={styles['website__meta-tags-list-item-content']}>
                  <p className={styles['website__meta-tags-list-item-content-text']}>
                    {website.og.siteName}
                  </p>
                </div>
              </li>
            )}

            {checkString(website.og.image.url) && (
              <li id="og-image" className={styles['website__meta-tags-list-item']}>
                <h3 className={styles['website__meta-tags-list-item-title']}>
                  Image
                </h3>

                <div className={styles['website__meta-tags-list-item-content']}>
                  <a
                    href={website.og.image.url}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className={styles['website__meta-tags-list-item-content-text']}
                  >
                    {website.og.image.url}
                  </a>
                </div>

                <img
                  src={website.og.image.url}
                  alt={website.og.image.alt || website.og.title || website.title}
                  width={website.og.image.width || undefined}
                  height={website.og.image.height || undefined}
                  loading="lazy"
                  className={styles['website__meta-tags-list-item-image']}
                />
              </li>
            )}

            {checkString(website.og.video.url) && (
              <li id="og-video" className={styles['website__meta-tags-list-item']}>
                <h3 className={styles['website__meta-tags-list-item-title']}>
                  Video
                </h3>

                <div className={styles['website__meta-tags-list-item-content']}>
                  <a
                    href={website.og.video.url}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className={styles['website__meta-tags-list-item-content-text']}
                  >
                    {website.og.video.url}
                  </a>
                </div>

                {website.og.video.type === 'text/html' && (
                  <iframe
                    src={website.og.video.url}
                    width={website.og.video.width || undefined}
                    height={website.og.video.height || undefined}
                    className={styles['website__meta-tags-list-item-iframe']}
                  />
                )}

                {(!checkString(website.og.video.type) || website.og.video.type === 'video/mp4' || website.og.video.type === 'video/mpeg') && (
                  <video
                    className={styles['website__meta-tags-list-item-video']}
                    width={website.og.video.width || 400}
                    height={website.og.video.height || 400}
                    controls
                  >
                    <source src={website.og.video.url} type={website.og.video.type || 'video/mp4'}/>

                    Your browser does not support this video.
                  </video>
                )}
              </li>
            )}
          </ul>
        </div>
      )}

      {checkNonNullableObject(website.twitter) && (
        <div id="twitter" className={styles['website__meta-tags']}>
          <h2 className={styles['website__meta-tags-title']}>
            Twitter meta tags
          </h2>

          <ul className={styles['website__meta-tags-list']}>
            {checkString(website.twitter.card) && (
              <li id="twitter-card" className={styles['website__meta-tags-list-item']}>
                <h3 className={styles['website__meta-tags-list-item-title']}>
                  Card
                </h3>

                <div className={styles['website__meta-tags-list-item-content']}>
                  <p className={styles['website__meta-tags-list-item-content-text']}>
                    {website.twitter.card}
                  </p>
                </div>
              </li>
            )}

            {checkString(website.twitter.site) && (
              <li id="twitter-site" className={styles['website__meta-tags-list-item']}>
                <h3 className={styles['website__meta-tags-list-item-title']}>
                  Site
                </h3>

                <div className={styles['website__meta-tags-list-item-content']}>
                  <a
                    href={`https://x.com/${website.twitter.site}`}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className={styles['website__meta-tags-list-item-content-text']}
                  >
                    {website.twitter.site}
                  </a>
                </div>
              </li>
            )}

            {checkString(website.twitter.creator) && (
              <li id="twitter-creator" className={styles['website__meta-tags-list-item']}>
                <h3 className={styles['website__meta-tags-list-item-title']}>
                  Creator
                </h3>

                <div className={styles['website__meta-tags-list-item-content']}>
                  <a
                    href={`https://x.com/${website.twitter.creator}`}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className={styles['website__meta-tags-list-item-content-text']}
                  >
                    {website.twitter.creator}
                  </a>
                </div>
              </li>
            )}

            {checkString(website.twitter.title) && (
              <li id="twitter-title" className={styles['website__meta-tags-list-item']}>
                <h3 className={styles['website__meta-tags-list-item-title']}>
                  Title
                </h3>

                <div className={styles['website__meta-tags-list-item-content']}>
                  <p className={styles['website__meta-tags-list-item-content-text']}>
                    {website.twitter.title}
                  </p>
                </div>
              </li>
            )}

            {checkString(website.twitter.description) && (
              <li id="twitter-description" className={styles['website__meta-tags-list-item']}>
                <h3 className={styles['website__meta-tags-list-item-title']}>
                  Description
                </h3>

                <div className={styles['website__meta-tags-list-item-content']}>
                  <p className={styles['website__meta-tags-list-item-content-text']}>
                    {website.twitter.description}
                  </p>
                </div>
              </li>
            )}

            {checkString(website.twitter.image.url) && (
              <li id="twitter-image" className={styles['website__meta-tags-list-item']}>
                <h3 className={styles['website__meta-tags-list-item-title']}>
                  Image
                </h3>

                <div className={styles['website__meta-tags-list-item-content']}>
                  <a
                    href={website.twitter.image.url}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className={styles['website__meta-tags-list-item-content-text']}
                  >
                    {website.twitter.image.url}
                  </a>
                </div>

                <img
                  src={website.twitter.image.url}
                  alt={website.twitter.image.alt || website.twitter.title || website.og.title || website.title}
                  width={website.twitter.image.width || undefined}
                  height={website.twitter.image.height || undefined}
                  loading="lazy"
                  className={styles['website__meta-tags-list-item-image']}
                />
              </li>
            )}
          </ul>
        </div>
      )}

      {/*<pre style={{marginTop: '30px', whiteSpace: 'pre-wrap', lineHeight: '1.5rem'}}>*/}
      {/*  {JSON.stringify(website, undefined, 2)}*/}
      {/*</pre>*/}
    </div>
  );
};

export default Website;
