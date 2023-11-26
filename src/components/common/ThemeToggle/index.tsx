'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import DarkIcon from '@/components/UI/Icons/DarkIcon';
import LightIcon from '@/components/UI/Icons/LightIcon';

import { useTheme } from '@/context/ThemeProvider';

import setCookie from '@/helpers/setCookie';

import { themeChangedStorageKey, themeStorageKey } from '@/constants/storageKeys';

import styles from './ThemeToggle.module.scss';

import { ThemeType } from '@/types';

const ThemeToggle = () => {
  const router = useRouter();

  const theme = useTheme();

  const themeReversed: ThemeType = theme === 'light' ? 'dark' : 'light';

  const handleChangeTheme = () => {
    localStorage.setItem(themeChangedStorageKey, 'true');

    setCookie(themeStorageKey, themeReversed);

    router.refresh();
  };

  const handleChangeColorScheme = ({ matches }: MediaQueryListEvent | MediaQueryList) => {
    const themeChanged = localStorage.getItem(themeChangedStorageKey);

    if (!themeChanged) {
      const newTheme = matches ? 'dark' : 'light';

      if (theme !== newTheme) {
        setCookie(themeStorageKey, newTheme);

        router.refresh();
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

export default ThemeToggle;
