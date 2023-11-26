'use client';

import { createContext, useContext } from 'react';

import { IThemeProviderProps } from '@/context/ThemeProvider/types';
import { ThemeType } from '@/types';

export const ThemeContext = createContext<ThemeType>('light');

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ theme = 'light', children }: IThemeProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
