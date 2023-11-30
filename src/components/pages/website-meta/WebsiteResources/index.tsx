import MetaTag from '@/components/pages/website-meta/MetaTag';
import HtmlIcon from '@/components/UI/Icons/HtmlIcon';
import JsonIcon from '@/components/UI/Icons/JsonIcon';

import checkString from '@/helpers/checkString';

import styles from '@/app/website/[[...url]]/Website.module.scss';

import { IWebsiteResourcesProps } from './types';

const WebsiteResources = ({ website, hasOg, hasTwitter }: IWebsiteResourcesProps) => {
  const htmlCode = `<!-- HTML Meta Tags -->
${checkString(website.title) ? `<title>${website.title}</title>` : ''}
${checkString(website.description) ? `<meta name="description" content="${website.description}">` : ''}
${checkString(website.keywords) ? `<meta name="keywords" content="${website.keywords}">` : ''}
${checkString(website.themeColor) ? `<meta name="theme-color" content="${website.themeColor}">` : ''}
${checkString(website.author) ? `<meta name="author" content="${website.author}">` : ''}
${checkString(website.generator) ? `<meta name="generator" content="${website.generator}">` : ''}
${checkString(website.publisher) ? `<meta name="publisher" content="${website.publisher}">` : ''}
${checkString(website.creator) ? `<meta name="creator" content="${website.creator}">` : ''}

${hasOg ? '<!-- Open Graph Meta Tags -->' : ''}
${checkString(website.og.title) ? `<meta property="og:title" content="${website.og.title}">` : ''}
${checkString(website.og.description) ? `<meta property="og:description" content="${website.og.description}">` : ''}
${checkString(website.og.url) ? `<meta property="og:url" content="${website.og.url}">` : ''}
${checkString(website.og.siteName) ? `<meta property="og:site_name" content="${website.og.siteName}">` : ''}
${checkString(website.og.locale) ? `<meta property="og:locale" content="${website.og.locale}">` : ''}
${checkString(website.og.type) ? `<meta property="og:type" content="${website.og.type}">` : ''}
${checkString(website.og.image.url) ? `<meta property="og:image" content="${website.og.image.url}">` : ''}
${checkString(website.og.image.alt) ? `<meta property="og:image:alt" content="${website.og.image.alt}">` : ''}
${checkString(website.og.image.width) ? `<meta property="og:image:width" content="${website.og.image.width}">` : ''}
${checkString(website.og.image.height) ? `<meta property="og:image:height" content="${website.og.image.height}">` : ''}
${checkString(website.og.video.url) ? `<meta property="og:video" content="${website.og.video.url}">` : ''}
${checkString(website.og.video.type) ? `<meta property="og:video:type" content="${website.og.video.type}">` : ''}
${checkString(website.og.video.width) ? `<meta property="og:video:width" content="${website.og.video.width}">` : ''}
${checkString(website.og.video.height) ? `<meta property="og:video:height" content="${website.og.video.height}">` : ''}
${checkString(website.og.audio.url) ? `<meta property="og:audio" content="${website.og.audio.url}">` : ''}
${checkString(website.og.audio.type) ? `<meta property="og:audio:type" content="${website.og.audio.type}">` : ''}

${hasTwitter ? '<!-- Twitter Meta Tags -->' : ''}
${checkString(website.twitter.card) ? `<meta name="twitter:card" content="${website.twitter.card}">` : ''}
${checkString(website.twitter.site) ? `<meta name="twitter:site" content="${website.twitter.site}">` : ''}
${checkString(website.twitter.creator) ? `<meta name="twitter:creator" content="${website.twitter.creator}">` : ''}
${checkString(website.twitter.title) ? `<meta name="twitter:title" content="${website.twitter.title}">` : ''}
${checkString(website.twitter.description) ? `<meta name="twitter:description" content="${website.twitter.description}">` : ''}
${checkString(website.twitter.image.url) ? `<meta name="twitter:image" content="${website.twitter.image.url}">` : ''}
${checkString(website.twitter.image.alt) ? `<meta name="twitter:image:alt" content="${website.twitter.image.alt}">` : ''}
${checkString(website.twitter.image.width) ? `<meta name="twitter:image:width" content="${website.twitter.image.width}">` : ''}
${checkString(website.twitter.image.height) ? `<meta name="twitter:image:height" content="${website.twitter.image.height}">` : ''}
${checkString(website.twitter.player.url) ? `<meta name="twitter:player" content="${website.twitter.player.url}">` : ''}
${checkString(website.twitter.player.width) ? `<meta name="twitter:player:width" content="${website.twitter.player.width}">` : ''}
${checkString(website.twitter.player.height) ? `<meta name="twitter:player:height" content="${website.twitter.player.height}">` : ''}
${checkString(website.twitter.player.stream) ? `<meta name="twitter:player:stream" content="${website.twitter.player.stream}">` : ''}
${checkString(website.twitter.app.iphone.name) ? `<meta name="twitter:app:name:iphone" content="${website.twitter.app.iphone.name}">` : ''}
${checkString(website.twitter.app.ipad.name) ? `<meta name="twitter:app:name:ipad" content="${website.twitter.app.ipad.name}">` : ''}
${checkString(website.twitter.app.googleplay.name) ? `<meta name="twitter:app:name:googleplay" content="${website.twitter.app.googleplay.name}">` : ''}
${checkString(website.twitter.app.iphone.id) ? `<meta name="twitter:app:id:iphone" content="${website.twitter.app.iphone.id}">` : ''}
${checkString(website.twitter.app.ipad.id) ? `<meta name="twitter:app:id:ipad" content="${website.twitter.app.ipad.id}">` : ''}
${checkString(website.twitter.app.googleplay.id) ? `<meta name="twitter:app:id:googleplay" content="${website.twitter.app.googleplay.id}">` : ''}
${checkString(website.twitter.app.iphone.url) ? `<meta name="twitter:app:url:iphone" content="${website.twitter.app.iphone.url}">` : ''}
${checkString(website.twitter.app.ipad.url) ? `<meta name="twitter:app:url:ipad" content="${website.twitter.app.ipad.url}">` : ''}
${checkString(website.twitter.app.googleplay.url) ? `<meta name="twitter:app:url:googleplay" content="${website.twitter.app.googleplay.url}">` : ''}
`
    .split(/\r?\n/).filter((line, index, array) => {
      const nextItem = array[index + 1];

      if (nextItem && nextItem.startsWith('<!')) {
        return true;
      }

      return line.trim() !== '';
    }).join('\n');

  return (
    <div id="resources" className={styles['website__meta-tags']}>
      <h2 className={styles['website__meta-tags-title']}>
        Resources
      </h2>

      <ul className={styles['website__meta-tags-list']}>
        <MetaTag
          id="resources-html"
          title="HTML"
          code={htmlCode}
          icon={HtmlIcon}
        />

        <MetaTag
          id="resources-json"
          title="JSON"
          code={JSON.stringify(website, undefined, 2)}
          icon={JsonIcon}
        />
      </ul>
    </div>
  );
};

export default WebsiteResources;
