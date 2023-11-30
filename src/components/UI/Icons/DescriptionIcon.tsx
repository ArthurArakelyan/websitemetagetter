import { defaultIconProps } from '@/components/UI/Icons/index';

import { IIconComponentProps } from './types';

const DescriptionIcon = (props: IIconComponentProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" {...defaultIconProps} {...props}>
      <path d="M2,3 L14,3 C14.5522847,3 15,3.44771525 15,4 C15,4.55228475 14.5522847,5 14,5 L2,5 C1.44771525,5 1,4.55228475 1,4 C1,3.44771525 1.44771525,3 2,3 Z" />
      <path d="M2,7 L14,7 C14.5522847,7 15,7.44771525 15,8 C15,8.55228475 14.5522847,9 14,9 L2,9 C1.44771525,9 1,8.55228475 1,8 C1,7.44771525 1.44771525,7 2,7 Z" />
      <path d="M1.88888889,11 L8.11111111,11 C8.60203089,11 9,11.4477153 9,12 C9,12.5522847 8.60203089,13 8.11111111,13 L1.88888889,13 C1.39796911,13 1,12.5522847 1,12 C1,11.4477153 1.39796911,11 1.88888889,11 Z" />
    </svg>
  );
};

export default DescriptionIcon;
