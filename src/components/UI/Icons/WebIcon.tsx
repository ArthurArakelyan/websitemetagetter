import { defaultIconProps } from '@/components/UI/Icons/index';

import { IIconComponentProps } from './types';

const WebIcon = (props: IIconComponentProps) => {
  return (
    <svg viewBox="0 0 18 18" width="24" height="24" fill="currentcolor" {...defaultIconProps} {...props}>
      <path fillRule="evenodd" d="m0 9c0-5 4-9 9-9 5 0 9 4 9 9 0 5-4 9-9 9-5 0-9-4-9-9zm9 7.1q0.4-0.5 0.8-1.4c0.4-0.7 0.8-1.5 1.1-2.6q-0.9-0.1-1.9-0.1-1 0-1.9 0.1c0.3 1.1 0.7 1.9 1.1 2.6q0.4 0.9 0.8 1.4zm-2.3-7.1q0.1 0.9 0.2 1.7 1-0.2 2.1-0.2 1.1 0 2.1 0.2 0.1-0.8 0.1-1.7 0-0.9-0.1-1.7-1 0.2-2.1 0.2-1.1 0-2.1-0.2-0.1 0.8-0.2 1.7zm-4.5-3.3c-0.4 1-0.7 2.1-0.7 3.3 0 1.2 0.3 2.3 0.7 3.3 0.9-0.5 1.9-1 3.2-1.3q-0.1-1-0.2-2 0.1-1 0.2-2c-1.3-0.3-2.3-0.8-3.2-1.3zm4.9 0.2q0.9 0.1 1.9 0.1 1 0 1.9-0.1c-0.3-1.1-0.7-1.9-1.1-2.6q-0.4-0.9-0.8-1.4-0.4 0.5-0.8 1.4c-0.4 0.7-0.8 1.5-1.1 2.6zm5.5 1.1q0.1 1 0.1 2 0 1-0.1 2c1.3 0.3 2.3 0.8 3.2 1.3 0.4-1 0.7-2.1 0.7-3.3 0-1.2-0.3-2.3-0.7-3.3-0.9 0.5-1.9 1-3.2 1.3zm-1.9-5.3q0.2 0.4 0.5 0.9c0.4 0.8 0.8 1.8 1.1 3 1.1-0.3 2-0.7 2.7-1.1-1.1-1.4-2.6-2.4-4.3-2.8zm-3.9 0.9q0.3-0.5 0.5-0.9c-1.7 0.4-3.2 1.4-4.3 2.8 0.7 0.4 1.6 0.8 2.7 1.1 0.3-1.2 0.7-2.2 1.1-3zm5.5 9.8c-0.3 1.2-0.7 2.2-1.1 3q-0.3 0.5-0.5 0.9c1.7-0.4 3.2-1.4 4.3-2.8-0.7-0.4-1.6-0.8-2.7-1.1zm-6.6 0c-1.1 0.3-2 0.7-2.7 1.1 1.1 1.4 2.6 2.4 4.3 2.8q-0.2-0.4-0.5-0.9c-0.4-0.8-0.8-1.8-1.1-3z"/>
    </svg>
  );
};

export default WebIcon;
