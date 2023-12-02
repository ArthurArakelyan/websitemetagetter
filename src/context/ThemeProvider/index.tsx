'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import getSafeTheme from '@/helpers/getSafeTheme';

import { themeStorageKey } from '@/constants/storageKeys';

import { ThemeType } from '@/types';
import { IThemeProvider, IThemeProviderProps } from '@/context/ThemeProvider/types';

export const ThemeContext = createContext<IThemeProvider>({
  theme: 'light',
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: IThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeType>('light');

  useEffect(() => {
    try {
      const storageTheme = localStorage.getItem(themeStorageKey);

      if (storageTheme) {
        setTheme(getSafeTheme(storageTheme));
      }
    } catch (error: any) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    try {
      const html = document.documentElement;

      if (html && html.setAttribute) {
        html.setAttribute('data-theme', theme);
      }
    } catch (error: any) {
      console.error(error);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
