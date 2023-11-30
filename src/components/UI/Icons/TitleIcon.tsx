import { defaultIconProps } from '@/components/UI/Icons/index';

import { IIconComponentProps } from './types';

const TitleIcon = (props: IIconComponentProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" {...defaultIconProps} {...props}>
      <path d="M3 2a1 1 0 00-1 1v3a1 1 0 002 0 2 2 0 012-2h2v10.999A1 1 0 017 16h-.001A1 1 0 007 18h6a1 1 0 100-2 1 1 0 01-1-1V4h2a2 2 0 012 2 1 1 0 102 0V3a1 1 0 00-1-1H3z" />
    </svg>
  );
};

export default TitleIcon;
