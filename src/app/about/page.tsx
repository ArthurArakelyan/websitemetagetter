import { Metadata } from 'next';
import Link from 'next/link';

import { defaultOpenGraph, mainTitle } from '@/constants/seo';

import styles from './About.module.scss';

const title = `About Us | ${mainTitle}`;
const description = 'This website is dedicated to help you in checking Meta Tags of any webpage.';
const canonical = '/about';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'website, meta, getter, about us',
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

const About = () => {
  return (
    <div className={styles['about']}>
      <h1 className={styles['about__title']}>
        About Us
      </h1>

      <div className={styles['about__content']}>
        <div className={styles['about__sections']}>
          <div className={styles['about__section']}>
            <h2 className={styles['about__section-title']}>
              About {mainTitle}
            </h2>

            <p className={styles['about__section-text']}>
              Our team is passionate about front-end development, software engineering and SEO. We strive to simplify the lives of developers, alike by providing tools to solve common Meta Tags creating problems that are accurate, easy to use, and backed by extensive experience.
            </p>

            <p className={styles['about__section-text']}>
              We love working closely with industry professionals to create tools that improve the process of web-development.
            </p>

            <p className={styles['about__section-text']}>
              Check out our <Link href="/blog">Blog</Link> to be informed about new updates.
            </p>
          </div>

          <div className={styles['about__section']}>
            <h2 className={styles['about__section-title']}>
              How Can We Help You?
            </h2>

            <p className={styles['about__section-text']}>
              We thrive on making your development easier. If you have an idea of something that would improve the website or want to partner up to build something new, <Link href="/contact">Contact Us</Link> to let us know, we’d love to help!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
