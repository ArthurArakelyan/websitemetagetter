import { FC } from 'react';

import { IIconComponentProps } from '@/components/UI/Icons/types';

export interface IMetaTagProps {
  id?: string;
  icon: FC<IIconComponentProps>;
  title: string;
  content?: string;
  url?: string;
  code?: string;
  color?: string;
  image?: {
    url: string;
    alt?: string;
    width?: string;
    height?: string;
  };
  iframe?: {
    url: string;
    width?: string;
    height?: string;
  };
  video?: {
    url: string;
    type?: string;
    width?: string;
    height?: string;
  };
}
