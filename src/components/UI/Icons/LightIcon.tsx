import { defaultIconProps } from '@/components/UI/Icons/index';

import { IIconComponentProps } from './types';

const LightIcon = (props: IIconComponentProps) => {
  return (
    <svg width="48" height="48" viewBox="0 96 960 960" {...defaultIconProps} {...props}>
      <path d="M481 1027 346 896H160V710L26 576l134-134V256h186l135-134 133 134h186v186l134 134-134 134v186H614l-133 131Zm0-191q107.917 0 183.458-76.125Q740 683.75 740 575q0-107.917-75.542-183.458Q588.917 316 481 316q-108.75 0-184.875 75.542Q220 467.083 220 575q0 108.75 76.125 184.875T481 836Zm-.5-60q-83.5 0-142-58.5t-58.5-142q0-83.5 58.5-141.5t142-58q83.5 0 141.5 58t58 141.5q0 83.5-58 142T480.5 776Z" />
    </svg>
  );
};

export default LightIcon;