import React from 'react';

// Components
import ErrorBoundary from '@/components/shared/ErrorBoundary';

export default function withErrorBoundary<T extends {} = {}>(WrappedComponent: React.ComponentType<T>) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithErrorBoundary = (props: T) => {
    return (
      <ErrorBoundary displayName={displayName}>
        <WrappedComponent {...(props as T)} />
      </ErrorBoundary>
    );
  };

  ComponentWithErrorBoundary.displayName = `withErrorBoundary(${displayName})`;

  return ComponentWithErrorBoundary;
}
