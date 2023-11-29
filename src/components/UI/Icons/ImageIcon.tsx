import { defaultIconProps } from '@/components/UI/Icons/index';

import { IIconComponentProps } from './types';

const ImageIcon = (props: IIconComponentProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 18 18" fill="none" {...defaultIconProps} {...props}>
      <path d="m17 11.2v3.8c0 1.1-0.9 2-2 2h-12c-1 0-1.8-0.7-2-1.7m0-0.3v-12c0-1.1 0.9-2 2-2h12c1.1 0 2 0.9 2 2v8.2l-1.7-1.7q-0.1-0.1-0.2-0.2c-0.7-0.4-1.6-0.4-2.3 0.2l-2.7 2.1c-0.6 0.5-1.6 0.6-2.3 0.1l-0.5-0.4c-0.8-0.5-1.8-0.4-2.5 0.2l-3.8 3.8q0-0.1 0-0.3zm5-11c-1.1 0-2 0.9-2 2 0 1.1 0.9 2 2 2 1.1 0 2-0.9 2-2 0-1.1-0.9-2-2-2z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default ImageIcon;
