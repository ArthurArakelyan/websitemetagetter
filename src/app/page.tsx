import { Metadata } from 'next';

import WebsiteInput from '../components/shared/WebsiteInput';
import HomeFAQ from '@/components/pages/home/HomeFAQ';

import getFaqStructuredData from '@/helpers/getFaqStructuredData';

import { organizationObject } from '@/constants/seo';
import homeFaq from '@/constants/homeFaq';

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
          __html: JSON.stringify([
            organizationObject,
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': getFaqStructuredData(homeFaq),
            }
          ]),
        }}
      />
    </div>
  );
};

export default Home;
