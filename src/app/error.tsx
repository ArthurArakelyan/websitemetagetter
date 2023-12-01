'use client';

import { Metadata } from 'next';

import Button from '@/components/UI/Button';

import { mainTitle } from '@/constants/seo';

import styles from './not-found.module.scss';


export const metadata: Metadata = {
  title: `Something Went Wrong | ${mainTitle}`,
};

const Error = (
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

      <Button onClick={() => reset()} className={styles['not-found__button']}>
        Try Again
      </Button>
    </div>
  );
};

export default Error;
