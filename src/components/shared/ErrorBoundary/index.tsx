import React, { ErrorInfo } from 'react';

import { IErrorBoundaryProps, IErrorBoundaryState } from './types';

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error): IErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    try {
      console.error(`${error} - info: ${JSON.stringify(errorInfo)}`, this.props.displayName);
    } catch (e: any) {}
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
