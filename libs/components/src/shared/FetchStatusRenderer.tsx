import React from 'react';
import { Status, FetchResult } from '@network';

export interface FetchStatusRendererProps {
  fetchResult: FetchResult;
  loadingComponent: React.ReactNode;
  errorComponent: React.ReactNode;
  children: React.ReactNode;
}

const FetchStatusRenderer = ({
  fetchResult,
  loadingComponent,
  errorComponent,
  children,
}: FetchStatusRendererProps) => {
  const { status } = fetchResult;

  if (status === Status.LOADING) {
    return loadingComponent;
  }

  if (status === Status.ERROR) {
    return errorComponent;
  }

  return <>{children}</>;
};

export default FetchStatusRenderer;
