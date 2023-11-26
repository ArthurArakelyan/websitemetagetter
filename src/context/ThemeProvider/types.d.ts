import { PropsWithChildren } from 'react';

import { ThemeType } from '@/types';

export interface IThemeProviderProps extends PropsWithChildren {
  theme?: ThemeType;
}
