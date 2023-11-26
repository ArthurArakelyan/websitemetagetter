'use client';

import { useEffect } from 'react';

// Components
import DarkIcon from '@/components/UI/Icons/DarkIcon';
import LightIcon from '@/components/UI/Icons/LightIcon';

// Constants
import { themeChangedStorageKey } from '@/constants/storageKeys';

// Styles
import styles from './ThemeToggle.module.scss';

const ThemeToggle = () => {
  const theme = 'light';

  const themeReversed: 'light' | 'dark' = theme === 'light' ? 'dark' : 'light';

  const handleChangeTheme = () => {
    localStorage.setItem(themeChangedStorageKey, 'true');

    // dispatch(changeTheme(themeReversed));
  };

  const handleChangeColorScheme = ({ matches }: MediaQueryListEvent | MediaQueryList) => {
    const themeChanged = localStorage.getItem(themeChangedStorageKey);

    if (!themeChanged) {
      // dispatch(changeTheme(matches ? 'dark' : 'light'));
    }
  };

  useEffect(() => {
    const colorSchemeMedia = window.matchMedia('(prefers-color-scheme: dark)');

    handleChangeColorScheme(colorSchemeMedia);

    colorSchemeMedia.addEventListener('change', handleChangeColorScheme);

    return () => {
      colorSchemeMedia.removeEventListener('change', handleChangeColorScheme);
    };
  }, []);

  return (
    <button
      aria-label={`Change theme to ${themeReversed}`}
      onClick={handleChangeTheme}
      className={styles['theme-toggle']}
    >
      <style jsx global>
        {`:root { color-scheme: ${theme}`}
      </style>

      {themeReversed === 'dark' ? (
        <DarkIcon className={styles['theme-toggle__icon']} />
      ) : (
        <LightIcon className={styles['theme-toggle__icon']} />
      )}
    </button>
  );
};

export default ThemeToggle;
