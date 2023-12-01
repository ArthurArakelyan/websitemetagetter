import 'server-only';

import * as cheerio from 'cheerio';
import type { CheerioAPI } from 'cheerio';

import { IWebsiteMeta, IWebsiteOGMeta, IWebsiteTwitterMeta } from '@/types';

const getMeta = ($: CheerioAPI, name: string, og = false): string | null => {
  try {
    return $(`meta[name="${name}"]`).attr('content') || (og ? $(`meta[property="${name}"]`).attr('content') : null) || null;
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
      title: getMeta($, 'og:title', true),
      description: getMeta($, 'og:description', true),
      url: getMeta($, 'og:url', true),
      siteName: getMeta($, 'og:site_name', true),
      locale: getMeta($, 'og:locale', true),
      type: getMeta($, 'og:type', true),

      image: {
        url: getMeta($, 'og:image', true) || getMeta($, 'og:image:url', true) || getMeta($, 'og:image:secure_url', true),
        width: getMeta($, 'og:image:width', true),
        height: getMeta($, 'og:image:height', true),
        alt: getMeta($, 'og:image:alt', true),
      },

      video: {
        url: getMeta($, 'og:video', true) || getMeta($, 'og:video:url', true) || getMeta($, 'og:video:secure_url', true),
        type: getMeta($, 'og:video:type', true),
        width: getMeta($, 'og:video:width', true),
        height: getMeta($, 'og:video:height', true),
      },

      audio: {
        url: getMeta($, 'og:audio', true) || getMeta($, 'og:audio:url', true) || getMeta($, 'og:audio:secure_url', true),
        type: getMeta($, 'og:audio:type', true),
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
        url: getMeta($, 'twitter:player'),
        width: getMeta($, 'twitter:player:width'),
        height: getMeta($, 'twitter:player:height'),
        stream: getMeta($, 'twitter:player:stream'),
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
