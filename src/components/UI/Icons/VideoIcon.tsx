import { defaultIconProps } from '@/components/UI/Icons/index';

import { IIconComponentProps } from './types';

const VideoIcon = (props: IIconComponentProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 20 14" fill="none" {...defaultIconProps} {...props}>
      <path d="m14 9l2.6 1.5c0.8 0.5 1.2 0.8 1.5 0.7 0.3 0 0.5-0.1 0.7-0.4 0.2-0.2 0.2-0.7 0.2-1.6v-4.4c0-0.9 0-1.4-0.2-1.6-0.2-0.3-0.4-0.4-0.7-0.4-0.3-0.1-0.7 0.2-1.5 0.7l-2.6 1.5m-9.8 8h6.6c1.1 0 1.7 0 2.1-0.2q0.6-0.3 0.9-0.9c0.2-0.4 0.2-1 0.2-2.1v-5.6c0-1.1 0-1.7-0.2-2.1q-0.3-0.6-0.9-0.9c-0.4-0.2-1-0.2-2.1-0.2h-6.6c-1.1 0-1.7 0-2.1 0.2q-0.6 0.3-0.9 0.9c-0.2 0.4-0.2 1-0.2 2.1v5.6c0 1.1 0 1.7 0.2 2.1q0.3 0.6 0.9 0.9c0.4 0.2 1 0.2 2.1 0.2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default VideoIcon;
