import Link from 'next/link';

import ThemeToggle from '@/components/common/ThemeToggle';

import headerLinks from '@/constants/headerLinks';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header id="header" className={styles['header']}>
      <Link className={styles['header__title']} href="/">
        <img
          src="/logo64.png"
          alt="Logo"
          width={64}
          height={64}
          className={styles['header__title-logo']}
        />

        <span className={styles['header__title-text']}>
          Website Meta Getter
        </span>
      </Link>

      <nav className={styles['header__nav']}>
        <ul className={styles['header__nav-list']}>
          {headerLinks.map((link) => {
            return (
              <li key={link.link} className={styles['header__nav-list-item']}>
                <a href={link.link} className={styles['header__nav-list-item-link']}>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
