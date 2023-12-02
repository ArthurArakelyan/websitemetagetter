import Link from 'next/link';

import styles from './TryExample.module.scss';

const TryExample = () => {
  return (
    <p className={styles['try-example']}>
      Try on an example: <Link href="/website/vercel.com">vercel.com</Link>
    </p>
  );
};

export default TryExample;
