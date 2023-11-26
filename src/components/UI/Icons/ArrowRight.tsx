import { defaultIconProps } from '@/components/UI/Icons/index';

import { IIconComponentProps } from './types';

const ArrowRight = (props: IIconComponentProps) => {
  return (
    <svg width="20.8" height="20.8" viewBox="0 0 28 27"  {...defaultIconProps} {...props}>
      <path d="M27.5 12.1L16.8 0.6C16.1 0 14.7-0.3 13.9 0.5 13.1 1.2 13.1 2.7 13.9 3.4L21.4 11.5 2 11.5C0.9 11.5 0 12.4 0 13.5 0 14.6 0.9 15.5 2 15.5L21.4 15.5 13.9 23.6C13.2 24.3 13.1 25.8 13.9 26.5 14.7 27.3 16.1 27 16.8 26.4L27.5 14.9C27.8 14.5 28 14 28 13.5 28 13 27.8 12.5 27.5 12.1Z" />
    </svg>
  );
};

export default ArrowRight;
