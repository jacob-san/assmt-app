import Wrapper, {
  FetchStatusRendererProps,
} from '../../shared/FetchStatusRenderer';
import React, { PropsWithChildren } from 'react';

const FetchStatusRenderer: PropsWithChildren<FetchStatusRendererProps> = ({
  children,
  ...rest
}) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default FetchStatusRenderer;
