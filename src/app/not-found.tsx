import { Metadata } from 'next';
import Link from 'next/link';

import mainTitle from '@/constants/mainTitle';

import styles from './not-found.module.scss';

export const metadata: Metadata = {
  title: `404 Not Found | ${mainTitle}`,
};

const NotFound = () => {
  return (
    <div className={styles['not-found']}>
      <h1 className={styles['not-found__title']}>
        404 Not Found
      </h1>

      <Link href="/" className={styles['not-found__link']}>
        Go back to home page
      </Link>
    </div>
  );
};

export default NotFound;
