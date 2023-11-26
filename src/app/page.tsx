import WebsiteInput from '@/components/pages/home/WebsiteInput';
import HomeFAQ from '@/components/pages/home/HomeFAQ';

import styles from './page.module.scss';

const Home = () => {
  return (
    <div className={styles['home']}>
      <h1 className={styles['home__title']}>
        Website Meta Getter
      </h1>

      <h2 className={styles['home__subtitle']}>
        A powerful tool that checks Meta Tags of the given website.<br/>
        Analyze and improve your webpage&apos;s meta tags for higher rankings in search engines and more beautiful look in social/chat apps.
      </h2>

      <WebsiteInput />

      <HomeFAQ />
    </div>
  );
};

export default Home;
