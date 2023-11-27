import 'server-only';

import * as cheerio from 'cheerio';
import type { CheerioAPI } from 'cheerio';

import { IWebsiteMeta, IWebsiteOGMeta, IWebsiteTwitterMeta } from '@/types';

const getMeta = ($: CheerioAPI, name: string): string | null => {
  try {
    return $(`meta[name="${name}"]`).attr('content') || $(`meta[property="${name}"]`).attr('content') || null;
  } catch (error) {
    console.error(error);

    return null;
  }
};

const getWebsiteMeta = (html: string): IWebsiteMeta | null => {
  try {
    if (!html || !html.trim()) {
      return null;
    }

    const $ = cheerio.load(html);

    const title = $('title').contents().text();
    const description = getMeta($, 'description');
    const keywords = getMeta($, 'keywords');
    const themeColor = getMeta($, 'theme-color');
    const author = getMeta($, 'author');
    const generator = getMeta($, 'generator');
    const publisher = getMeta($, 'publisher');
    const creator = getMeta($, 'creator');

    const og: IWebsiteOGMeta = {
      title: getMeta($, 'og:title'),
      description: getMeta($, 'og:description'),
      url: getMeta($, 'og:url'),
      siteName: getMeta($, 'og:site_name'),
      locale: getMeta($, 'og:locale'),
      type: getMeta($, 'og:type'),

      image: {
        url: getMeta($, 'og:image') || getMeta($, 'og:image:url') || getMeta($, 'og:image:secure_url'),
        width: getMeta($, 'og:image:width'),
        height: getMeta($, 'og:image:height'),
        alt: getMeta($, 'og:image:alt'),
      },

      video: {
        url: getMeta($, 'og:video') || getMeta($, 'og:video:url') || getMeta($, 'og:video:secure_url'),
        type: getMeta($, 'og:video:type'),
        width: getMeta($, 'og:video:width'),
        height: getMeta($, 'og:video:height'),
      },

      audio: {
        url: getMeta($, 'og:audio') || getMeta($, 'og:audio:url') || getMeta($, 'og:audio:secure_url'),
        type: getMeta($, 'og:audio:type'),
      },
    };

    const twitter: IWebsiteTwitterMeta = {
      card: getMeta($, 'twitter:card'),
      site: getMeta($, 'twitter:site') || getMeta($, 'twitter:site:id'),
      creator: getMeta($, 'twitter:creator') || getMeta($, 'twitter:creator:id'),
      title: getMeta($, 'twitter:title'),
      description: getMeta($, 'twitter:description'),

      image: {
        url: getMeta($, 'twitter:image'),
        width: getMeta($, 'twitter:image:width'),
        height: getMeta($, 'twitter:image:height'),
        alt: getMeta($, 'twitter:image:alt'),
      },

      player: {
        url: getMeta($, 'twitter:player') || getMeta($, 'twitter:player:stream'),
        width: getMeta($, 'twitter:player:width'),
        height: getMeta($, 'twitter:player:height'),
      },

      app: {
        iphone: {
          name: getMeta($, 'twitter:app:name:iphone'),
          id: getMeta($, 'twitter:app:id:iphone'),
          url: getMeta($, 'twitter:app:url:iphone'),
        },
        ipad: {
          name: getMeta($, 'twitter:app:name:ipad'),
          id: getMeta($, 'twitter:app:id:ipad'),
          url: getMeta($, 'twitter:app:url:ipad'),
        },
        googleplay: {
          name: getMeta($, 'twitter:app:name:googleplay'),
          id: getMeta($, 'twitter:app:id:googleplay'),
          url: getMeta($, 'twitter:app:url:googleplay'),
        },
      },
    };

    return {
      title,
      description,
      keywords,
      themeColor,
      author,
      generator,
      publisher,
      creator,
      og,
      twitter,
    };
  } catch (error) {
    console.error(error);

    return null;
  }
};

export default getWebsiteMeta;
