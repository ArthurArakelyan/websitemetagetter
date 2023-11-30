import { defaultIconProps } from '@/components/UI/Icons/index';

import { IIconComponentProps } from './types';

const CardIcon = (props: IIconComponentProps) => {
  return (
    <svg viewBox="0 0 22 20" width="24" height="24" fill="none" {...defaultIconProps} {...props}>
      <path fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m21 7h-20"/>
      <path fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 14.9h6"/>
      <path fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m17 0.9h-12c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4v-10c0-2.2-1.8-4-4-4z"/>
    </svg>
  );
};

export default CardIcon;
