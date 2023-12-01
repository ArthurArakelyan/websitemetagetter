import 'server-only';

// Helpers
import getTime from '@/helpers/getTime';

// Types
import { IBlog } from '@/types';

export const blogGenres = {
  news: 'News',
  update: 'Update',
};

// Add urls in sitemap

// Image sizes
// Card - w=466 h=233
// Main - w=806 h=403
// OG - w=1260 h=630

const blogs: IBlog[] = [
  {
    id: 'website-meta-getter-release',
    title: 'Website Meta Getter Release',
    description: `Meet our new free website with modern UI and dark theme support where you can quickly and easily check any website's Meta Tags. It supports almost all Meta Tags.`,
    keywords: 'website, meta, getter, release',
    genre: blogGenres.news,
    date: getTime('2023-12-01'),
    dateUpdated: getTime('2023-12-01'),
    cardImage: '/images/blog/website-meta-getter-release/website-meta-getter-release-card.png',
    image: '/images/blog/website-meta-getter-release/website-meta-getter-release-main.png',
    ogImage: '/images/blog/website-meta-getter-release/website-meta-getter-release-og.png',
    imageAlt: 'Release',
    blog: `
      <p>Meet our new free tool with modern UI, <b>light/dark theme</b> support where you can <b>quickly and easily</b> check any website's <b>Meta Tags</b>. It supports almost all meta tags.</p>
      <br>
      <p>If you want to check the meta tags of a website you can fill the <b>Website Address</b> input with the URL of a website in <a href="/">Home</a> page, then submit it by clicking the button right after the input, after that Website Meta Getter will <b>check and provide</b> for you all meta tags the inserted website has.</p>
      <br>
      <h2>Meta Tags</h2>
      <br>
      <p>Here is the list of meta tags which Website Meta Getter supports</p>
      <br>
      <p><b>Main HTML meta tags</b></p>
      <ul>
        <li>title</li>
        <li>description</li>
        <li>keywords</li>
        <li>theme-color</li>
        <li>author</li>
        <li>generator</li>
        <li>publisher</li>
        <li>creator</li>
      </ul>
      <br>
      <p><b>Open graph protocol meta tags</b></p>
      <ul>
        <li>og:title</li>
        <li>og:description</li>
        <li>og:url</li>
        <li>og:site_name</li>
        <li>og:locale</li>
        <li>og:type</li>
        <li>og:image</li>
        <li>og:image:url</li>
        <li>og:image:secure_url</li>
        <li>og:image:width</li>
        <li>og:image:height</li>
        <li>og:image:alt</li>
        <li>og:video</li>
        <li>og:video:url</li>
        <li>og:video:secure_url</li>
        <li>og:video:type</li>
        <li>og:video:width</li>
        <li>og:video:height</li>
        <li>og:audio</li>
        <li>og:audio:url</li>
        <li>og:audio:secure_url</li>
        <li>og:audio:type</li>
      </ul>
      <br>
      <p><b>Twitter meta tags</b></p>
      <ul>
        <li>twitter:card</li>
        <li>twitter:site</li>
        <li>twitter:site:id</li>
        <li>twitter:creator</li>
        <li>twitter:creator:id</li>
        <li>twitter:title</li>
        <li>twitter:description</li>
        <li>twitter:image</li>
        <li>twitter:image:width</li>
        <li>twitter:image:height</li>
        <li>twitter:image:alt</li>
        <li>twitter:player</li>
        <li>twitter:player:width</li>
        <li>twitter:player:height</li>
        <li>twitter:player:stream</li>
        <li>twitter:app:name:iphone</li>
        <li>twitter:app:id:iphone</li>
        <li>twitter:app:url:iphone</li>
        <li>twitter:app:name:ipad</li>
        <li>twitter:app:id:ipad</li>
        <li>twitter:app:url:ipad</li>
        <li>twitter:app:name:googleplay</li>
        <li>twitter:app:id:googleplay</li>
        <li>twitter:app:url:googleplay</li>
      </ul>
      <br>
      <h3>Features</h3>
      <br>
      <p>Here is the list of features which Website Meta Getter provides</p>
      <br>
      <ul>
        <li><b>PWA</b> it makes possible to install the website then use it as <b>Desktop/Mobile</b> application</li>
        <li><b>Light/Dark</b> themes</li>
        <li><b>Checks Meta Tags</b> of any website</li>
        <li><b>Social Card Preview</b> to help make a better card for social sites</li>
        <li><b>HTML</b> preview of meta tags</li>
        <li><b>JSON</b> data of meta tags</li>
      </ul>
      <br>
      <h4>Conclusion</h4>
      <br>
      <p>We made a very useful feature for <b>front-end</b> developers and <b>SEO</b> specialists, to make website's meta tags checking <b>faster and available</b> at any time. If you have any questions or concerns, please feel free to <a href="/contact" target="_blank">Contact Us</a>. Hope you will enjoy this website.</p>
    `,
  },
];

export default blogs;
