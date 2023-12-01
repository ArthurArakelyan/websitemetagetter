'use client';

import Button from '@/components/UI/Button';

import { mainTitle } from '@/constants/seo';

import styles from './not-found.module.scss';

const GlobalError = (
  {
    error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  },
) => {
  return (
    <html>
      <head>
        <title>{`Something Went Wrong | ${mainTitle}`}</title>
      </head>
      <body>
        <div className={`${styles['not-found']} ${styles['not-found--global']}`}>
          <h1 className={styles['not-found__title']}>
            Something went wrong
          </h1>

          <Button onClick={() => reset()} className={styles['not-found__button']}>
            Try Again
          </Button>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
