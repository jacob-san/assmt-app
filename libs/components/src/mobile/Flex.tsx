import React, {PropsWithChildren} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import styled, {css} from 'styled-components/native';

type FlexProps = PropsWithChildren<{
  row?: boolean;
  style?: any;
}>;

const Flex = (props: FlexProps) => {
  const {
    scrollView = false,
    showsVerticalScrollIndicator = true,
    showsHorizontalScrollIndicator = true,
    row,
    style = {},
    containerProps = {},
    testProps = {},
    ...rest
  } = props;

  let custProps = {...testProps};

  if (row) {
    custProps = {...custProps, row};
  }
  if (scrollView) {
    custProps = {
      ...custProps,
      showsVerticalScrollIndicator,
      showsHorizontalScrollIndicator,
      horizontal: row,
    };
  }

  const Component = scrollView ? ScrollContainer : Container;

  return (
    <Component
      {...custProps}
      {...containerProps}
      style={{...rest, ...(style as ViewStyle)}}>
      {props.children}
    </Component>
  );
};

Flex.defaultProps = {
  row: false,
  scrollView: false,
};

/* Styles  */
const Container = styled.View`
  ${(props: FlexProps) =>
    props.row &&
    css`
      flex-direction: row;
    `};
  flex-grow: ${props => (props.row ? 0 : 1)};
`;
/* Styles  */
const ScrollContainer = styled.ScrollView`
  ${(props: FlexProps) =>
    props.row &&
    css`
      flex-direction: row;
    `};
  flex-grow: 1;
`;

export default Flex;
