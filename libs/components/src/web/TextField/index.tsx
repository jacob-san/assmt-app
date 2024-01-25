import React from 'react';
import MuiTextField, { TextFieldProps } from '@mui/material/TextField';

type Props = TextFieldProps;

export const TextField: React.FC<Props> = (props) => {
  return <MuiTextField fullWidth variant="filled" {...props} />;
};
