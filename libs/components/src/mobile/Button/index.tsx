import React, {PropsWithChildren} from 'react';
import {Button as PaperButton} from 'react-native-paper';

type ButtonProps = PropsWithChildren<{
  label: string;
  onPress: () => void;
  mode?:
    | 'contained'
    | 'text'
    | 'outlined'
    | 'elevated'
    | 'contained-tonal'
    | undefined;
}>;

const Button = ({
  label,
  onPress,
  mode = 'contained',
  ...rest
}: ButtonProps): React.JSX.Element => {
  return (
    <PaperButton mode={mode} onPress={onPress} {...rest}>
      {label}
    </PaperButton>
  );
};

export default Button;
