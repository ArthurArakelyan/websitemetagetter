'use client';

import { Metadata } from 'next';

import mainTitle from '@/constants/mainTitle';

import styles from './not-found.module.scss';

export const metadata: Metadata = {
  title: `Something Went Wrong | ${mainTitle}`,
};

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
    <div className={styles['not-found']}>
      <h1 className={styles['not-found__title']}>
        Something went wrong
      </h1>

      <button onClick={() => reset()} className={styles['not-found__link']}>
        Try Again
      </button>
    </div>
  );
};

export default GlobalError;
