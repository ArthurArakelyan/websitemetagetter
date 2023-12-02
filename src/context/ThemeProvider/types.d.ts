import { PropsWithChildren } from 'react';

import { ThemeType } from '@/types';

export interface IThemeProviderProps extends PropsWithChildren {

}

export interface IThemeProvider {
  theme: ThemeType;
  setTheme: (value: ThemeType) => any;
}
