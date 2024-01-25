import React from 'react';
import {TextInput} from 'react-native-paper';
import {Controller, Control} from 'react-hook-form';

type HFTextInputProps = {
  control: Control;
  controllerProps: any;
  label: string;
  style: any;
};

const HFTextInput = ({controllerProps, ...rest}: HFTextInputProps) => {
  return (
    <Controller
      {...controllerProps}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          {...rest}
        />
      )}
    />
  );
};

export default HFTextInput;
