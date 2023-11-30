import { Metadata } from 'next';

import ContactForm from '@/components/pages/contact/ContactForm';

import { defaultOpenGraph, mainTitle } from '@/constants/seo';

import styles from './Contact.module.scss';

const title = `Contact Us | ${mainTitle}`;
const description = 'Contact Us to let us know how we are doing, request a feature or improvement or bug fix, ask a question, or to leave us a message.';
const canonical = '/contact';

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

const Contact = () => {
  return (
    <div className={styles['contact']}>
      <h1 className={styles['contact__title']}>
        Contact Us
      </h1>

      <div className={styles['contact__descriptions']}>
        <h2 className={styles['contact__description']}>
          If you have any questions, concerns, ideas for a new calculator, improvements you would like to see, interest in a partnership, or other feedback, please use the contact form below.
        </h2>

        <h3 className={styles['contact__description']}>
          We value your opinion and take all feedback seriously.
        </h3>

        <h4 className={styles['contact__description']}>
          Your name and email are optional and only needed if you would like a reply.
        </h4>
      </div>

      <div className={styles['contact__content']}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
