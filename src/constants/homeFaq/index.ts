import { IFaq } from '@/types';

const homeFaq: IFaq[] = [
  {
    title: 'What are meta tags?',
    description: [
      `Meta tags are snippets of text that describe a page's content, the meta tags don't appear on the page itself, but only in the page's source code. Meta tags are essentially little content descriptors that help tell search engines what a web page is about.`,
      `Meta tags are important for SEO, because they help search engines understand the content of a webpage. It affects how the webpage is ranked in search engine results.`,
      `Meta tags enable social networks and messaging services get the required information from your website and display it in a visual way instead of just a plain link. This will not only make your website better, but can also result in higher engagement, since the users have more context on what to expect when visiting the link.`,
      `The most important meta tag is the <b>"title"</b> tag, which is the text that appears in the browser's title bar and as the clickable headline for a webpage in search engine results.`,
      `The <b>"description"</b> tag is another important meta tag. It provides a brief summary of the webpage's content and appears below the title in search engine results.`,
      `The <b>"keywords"</b> tag is less important, it can be a useful way to include relevant keywords for the webpage that aren't included in the title and description.`,
      `The <b>"theme-color"</b> tag  provides a way to suggest a color that browsers should use to customize the display of the page or of the surrounding user interface. For example, browsers might use the color for the page’s title bar or use it as a color highlight in a tab bar or task switcher.`,
      `The <b>"color-scheme"</b> specifies one or more color schemes with which the document is compatible. The browser will use this information in tandem with the user's browser or device settings to determine what colors to use for everything from background and foregrounds to form controls and scrollbars.`,
    ],
    links: [
      {
        name: 'MDN - Standard metadata names',
        alt: 'MDN',
        icon: 'https://developer.mozilla.org/favicon.ico',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name',
      },
      {
        name: `MDN - What's in the head? Metadata in HTML`,
        alt: 'MDN',
        icon: 'https://developer.mozilla.org/favicon.ico',
        link: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML',
      },
    ],
  },
  {
    title: 'What are OG meta tags?',
    description: [
      `Open Graph meta tags are snippets of code that control how URLs are displayed when shared on social media and chats. They're part of Facebook's Open Graph protocol.`,
      `Other social media sites are also taking advantage of social meta tags. For example, Twitter and Linkedin recognize Open Graph tags. Twitter has its own meta tags for Twitter Cards, but if Twitter robots cannot find any, it uses OG metadata tags instead.`,
      `<b>"og:title"</b> The title of your page. This is typically the same as your webpage's <b>title</b> tag unless you'd like to present it differently.`,
      `<b>"og:url"</b> This should be the canonical URL of the current page.`,
      `<b>"og:description"</b> The description of your page. This is typically the same as your webpage's meta description.`,
      `<b>"og:image"</b> This should be a link to an image that you'd like to represent your content. It should be a high resolution image that the social networks will use in their feeds.`,
    ],
    links: [
      {
        name: 'OGP - The Open Graph protocol',
        alt: 'OGP',
        icon: 'https://ogp.me/favicon.ico',
        link: 'https://ogp.me/',
      },
    ],
  },
  {
    title: 'What are Twitter meta tags?',
    description: [
     `Twitter Cards are a metadata specification used by Twitter to display rich text and imagery when links are shared on the service.`,
      `<b>"twitter:card"</b> this tag specifies the type of Twitter Card that should be displayed. The <b>"summary_large_image"</b> type displays a short summary with a large image preview. The <b>"summary"</b> provides a Summary Card, which has a small square image alongside summary text.`,
      `<b>"twitter:title"</b> title of the page or article (equivalent to Open Graph's og:title).`,
      `<b>"twitter:description"</b> a brief description of the page that will be displayed under the title. This should be a maximum of 200 characters, and may be truncated even further when displayed.`,
      `<b>"twitter:site"</b> your Twitter username, or your site or company’s username`,
      `<b>"twitter:image"</b> full link to the image you want to use for the page (equivalent to Open Graph's og:image). For best results, use an image specific to the link, rather than something more generic like your company's logo.`,
      `<b>"twitter:image:alt"</b> Optional. Supplies a text description of the image for visually-impaired users.`,
    ],
    links: [
      {
        name: 'Twitter Developer Platform - Cards',
        alt: 'Twitter Developer Platform',
        icon: 'https://abs.twimg.com/favicons/twitter-orange.3.ico',
        link: 'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup',
      },
    ],
  },
];

export default homeFaq;
