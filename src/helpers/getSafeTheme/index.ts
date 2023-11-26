import { ThemeType } from '@/types';

const getSafeTheme = (theme: string | undefined): ThemeType => {
  try {
    if (theme !== 'light' && theme !== 'dark') {
      return 'light';
    }

    return theme;
  } catch (error: any) {
    console.error(error);

    return 'light';
  }
};

export default getSafeTheme;
