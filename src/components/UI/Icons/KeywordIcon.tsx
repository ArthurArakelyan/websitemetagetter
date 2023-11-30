import { defaultIconProps } from '@/components/UI/Icons/index';

import { IIconComponentProps } from './types';

const KeywordIcon = (props: IIconComponentProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...defaultIconProps} {...props}>
      <path d="M9.49999 3L6.49999 21M17.5 3L14.5 21M20.5 8H3.5M19.5 16H2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default KeywordIcon;
