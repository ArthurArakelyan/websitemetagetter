import { Metadata } from 'next';

import getFaqStructuredData from '@/helpers/getFaqStructuredData';

import { siteFaq, siteFaqScheme } from '@/constants/faq';
import { defaultOpenGraph, mainTitle } from '@/constants/seo';

import styles from './Faq.module.scss';

const title = `Frequently Asked Questions | ${mainTitle}`;
const description = `Discover answers to frequently asked questions about ${mainTitle} services. Find out how we can help you.`;
const canonical = '/faq';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: canonical,
  },
  openGraph: {
    ...defaultOpenGraph,
    title,
    description,
    url: canonical,
  },
};

const Faq = () => {
  return (
    <div className={styles['faq']}>
      <h1 className={styles['faq__title']}>
        Frequently Asked Questions
      </h1>

      <div className={styles['faq__content']}>
        <div className={styles['faq__cards']}>
          {siteFaq.map((faq, index) => {
            return (
              <div
                key={`faq-${index}`}
                className={styles['faq__card']}
              >
                <h2 className={styles['faq__card-title']}>
                  {faq.title}
                </h2>

                <p
                  className={styles['faq__card-description']}
                  dangerouslySetInnerHTML={{ __html: faq.description }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': getFaqStructuredData(siteFaqScheme),
          }),
        }}
      />
    </div>
  );
};

export default Faq;
