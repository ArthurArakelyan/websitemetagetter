import styles from './Loader.module.scss';

import { ILoaderProps } from './types';

const Loader = ({ size = 'normal', className = '' }: ILoaderProps) => {
  return (
    <div
      role="alert"
      aria-busy={true}
      aria-label="Loading..."
      className={`${styles['loader-wrapper']} ${styles[`loader-wrapper--${size}`]} ${className}`}
    >
      <svg aria-hidden className={styles['loader']} viewBox="22 22 44 44">
        <circle className={styles['loader__circle']} cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6" />
      </svg>
    </div>
  );
};

export default Loader;
