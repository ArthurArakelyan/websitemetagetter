'use client';

import { useEffect } from 'react';

import withErrorBoundary from '@/HOC/withErrorBoundary';

import DarkIcon from '@/components/UI/Icons/DarkIcon';
import LightIcon from '@/components/UI/Icons/LightIcon';

import { useTheme } from '@/context/ThemeProvider';

import { themeChangedStorageKey, themeStorageKey } from '@/constants/storageKeys';

import styles from './ThemeToggle.module.scss';

import { ThemeType } from '@/types';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const themeReversed: ThemeType = theme === 'light' ? 'dark' : 'light';

  const handleChangeTheme = () => {
    localStorage.setItem(themeChangedStorageKey, 'true');
    localStorage.setItem(themeStorageKey, themeReversed);
    setTheme(themeReversed);
  };

  const handleChangeColorScheme = ({ matches }: MediaQueryListEvent | MediaQueryList) => {
    const themeChanged = localStorage.getItem(themeChangedStorageKey);

    if (!themeChanged) {
      const newTheme = matches ? 'dark' : 'light';

      if (theme !== newTheme) {
        localStorage.setItem(themeStorageKey, newTheme);
        setTheme(newTheme);
      }
    }
  };

  useEffect(() => {
    const colorSchemeMedia = window.matchMedia('(prefers-color-scheme: dark)');

    handleChangeColorScheme(colorSchemeMedia);

    colorSchemeMedia.addEventListener('change', handleChangeColorScheme);

    return () => {
      colorSchemeMedia.removeEventListener('change', handleChangeColorScheme);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <button
      aria-label={`Change theme to ${themeReversed}`}
      onClick={handleChangeTheme}
      className={styles['theme-toggle']}
    >
      {themeReversed === 'dark' ? (
        <DarkIcon className={styles['theme-toggle__icon']} />
      ) : (
        <LightIcon className={styles['theme-toggle__icon']} />
      )}
    </button>
  );
};

export default withErrorBoundary(ThemeToggle);
