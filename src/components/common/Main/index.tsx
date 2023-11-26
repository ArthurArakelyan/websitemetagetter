import styles from './Main.module.scss';

import { IMainProps } from './types';

const Main = ({ children }: IMainProps) => {
  return (
    <main id="main" className={styles['main']}>
      {children}
    </main>
  );
};

export default Main;
