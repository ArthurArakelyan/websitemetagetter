'use client';

import { useEffect, useState } from 'react';

import withErrorBoundary from '@/HOC/withErrorBoundary';

import getSafeTheme from '@/helpers/getSafeTheme';

import { themeChangedStorageKey, themeStorageKey } from '@/constants/storageKeys';
import { defaultIconProps } from '@/components/UI/Icons';

import styles from './ThemeToggle.module.scss';

import { ThemeType } from '@/types';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<ThemeType | null>(null);
  const [themeInitialized, setThemeInitialized] = useState<boolean>(false);

  const themeReversed: ThemeType = theme === 'dark' ? 'light' : 'dark';

  const handleChangeTheme = () => {
    localStorage.setItem(themeChangedStorageKey, 'true');
    localStorage.setItem(themeStorageKey, themeReversed);
    setTheme(themeReversed);
  };

  const handleChangeColorScheme = ({ matches }: MediaQueryListEvent | MediaQueryList) => {
    if (themeInitialized) {
      const themeChanged = localStorage.getItem(themeChangedStorageKey);

      if (!themeChanged) {
        const newTheme = matches ? 'dark' : 'light';

        if (theme !== newTheme) {
          localStorage.setItem(themeStorageKey, newTheme);
          setTheme(newTheme);
        }
      }
    }
  };

  useEffect(() => {
    try {
      const storageTheme = localStorage.getItem(themeStorageKey);

      if (storageTheme) {
        setTheme(getSafeTheme(storageTheme));
      }

      setThemeInitialized(true);
    } catch (error: any) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const colorSchemeMedia = window.matchMedia('(prefers-color-scheme: dark)');

    handleChangeColorScheme(colorSchemeMedia);

    colorSchemeMedia.addEventListener('change', handleChangeColorScheme);

    return () => {
      colorSchemeMedia.removeEventListener('change', handleChangeColorScheme);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, themeInitialized]);

  useEffect(() => {
    try {
      if (theme !== null) {
        const themeChanged = localStorage.getItem(themeChangedStorageKey);

        if (themeChanged) {
          const html = document.documentElement;

          if (html && html.setAttribute) {
            html.setAttribute('data-theme', theme);

            const themeColorMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');

            if (themeColorMeta) {
              themeColorMeta.setAttribute('content', theme === 'dark' ? '#202020' : '#ffffff');
            }
          }
        }
      }
    } catch (error: any) {
      console.error(error);
    }
  }, [theme]);

  return (
    <button
      aria-label={`Change theme to ${themeReversed}`}
      onClick={handleChangeTheme}
      className={styles['theme-toggle']}
    >
      <svg width="48" height="48" viewBox="0 96 960 960" {...defaultIconProps} className={styles['theme-toggle__icon']}>
        <path d="M481 1027 346 896H160V710L26 576l134-134V256h186l135-134 133 134h186v186l134 134-134 134v186H614l-133 131Zm0-191q107.917 0 183.458-76.125Q740 683.75 740 575q0-107.917-75.542-183.458Q588.917 316 481 316q-108.75 0-184.875 75.542Q220 467.083 220 575q0 108.75 76.125 184.875T481 836Zm-.5-60q-83.5 0-142-58.5t-58.5-142q0-83.5 58.5-141.5t142-58q83.5 0 141.5 58t58 141.5q0 83.5-58 142T480.5 776Z" />
        <path d="M481 1027 346 896H160V710L26 576l134-134V256h186l135-134 133 134h186v186l134 134-134 134v186H614l-133 131Zm-2-191q111 0 186-75.5T740 575q0-110-75.5-185.5T479 314q-27 0-52 5.5T373 338q69 32 111 96t42 141q0 77-42 141t-111 97q24 11 50.5 17t55.5 6Z" />
      </svg>
    </button>
  );
};

export default withErrorBoundary(ThemeToggle);
