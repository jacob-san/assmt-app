import React, { PropsWithChildren } from 'react';
import MuiTypography, { TypographyProps } from '@mui/material/Typography';
import { useTheme } from '@theme';

interface Props extends PropsWithChildren<TypographyProps> {
  color?: string;
}

export const Typography: React.FC<Props> = (props) => {
  const theme = useTheme();
  const { color, ...otherProps } = props;

  return (
    <MuiTypography
      style={{ color: color ?? theme.colors.text }}
      {...otherProps}
    >
      {props.children}
    </MuiTypography>
  );
};
