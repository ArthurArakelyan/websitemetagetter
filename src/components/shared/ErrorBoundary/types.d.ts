import { PropsWithChildren } from 'react';

export interface IErrorBoundaryProps extends PropsWithChildren {
  displayName?: string;
}

export interface IErrorBoundaryState {
  hasError: boolean;
}
