import { defaultIconProps } from '@/components/UI/Icons/index';

import { IIconComponentProps } from './types';

const DarkIcon = (props: IIconComponentProps) => {
  return (
    <svg width="48" height="48" viewBox="0 96 960 960" {...defaultIconProps} {...props}>
      <path d="M481 1027 346 896H160V710L26 576l134-134V256h186l135-134 133 134h186v186l134 134-134 134v186H614l-133 131Zm-2-191q111 0 186-75.5T740 575q0-110-75.5-185.5T479 314q-27 0-52 5.5T373 338q69 32 111 96t42 141q0 77-42 141t-111 97q24 11 50.5 17t55.5 6Z" />
    </svg>
  );
};

export default DarkIcon;
