import Link from 'next/link';

import footerLinks from '@/constants/footerLinks';

import styles from './Footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className={styles['footer']}>
      <div className={styles['footer__info']}>
        <Link href="/">
          <img
            src="/logo64.png"
            alt="Logo"
            width={64}
            height={64}
            className={styles['footer__info-logo']}
          />
        </Link>

        <h4 className={styles['footer__info-title']}>
          <span className={styles['footer__info-title-copyright']}>©</span> {year} Website Meta Getter
        </h4>
      </div>

      <div className={styles['footer__links']}>
        {footerLinks.map((footerLink) => {
          return (
            <a
              key={footerLink.link}
              href={footerLink.link}
              className={styles['footer__links-link']}
            >
              {footerLink.label}
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
