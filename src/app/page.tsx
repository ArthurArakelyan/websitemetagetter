import { Metadata } from 'next';

import WebsiteInput from '../components/shared/WebsiteInput';
import HomeFAQ from '@/components/pages/home/HomeFAQ';

import { mainTitle, url } from '@/constants/seo';

import styles from './page.module.scss';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

const Home = () => {
  return (
    <div className={styles['home']}>
      <h1 className={styles['home__title']}>
        Website Meta Getter
      </h1>

      <h2 className={styles['home__subtitle']}>
        A powerful tool that checks Meta Tags of the given website.<br/>
        Analyze and improve your webpage&apos;s meta tags for higher rankings in search engines and more beautiful look in social/chat apps.
      </h2>

      <WebsiteInput />

      <HomeFAQ />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': mainTitle,
            'url': `${url}/`,
            'logo': {
              '@type': 'ImageObject',
              'caption': mainTitle,
              'height': 512,
              'inLanguage': 'en-US',
              'url': `${url}/logo.png`,
              'width': 512,
            },
          }),
        }}
      />
    </div>
  );
};

export default Home;
