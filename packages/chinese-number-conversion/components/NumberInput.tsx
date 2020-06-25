import React, { FC } from 'react';
import { TextField } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { InputContainer } from './InputContainer';
import { textState } from '../states';

export const NumberInput: FC = () => {
  const [text, setText] = useRecoilState(textState);
  return (
    <InputContainer>
      <TextField
        label="Chinese Number Input"
        variant="standard"
        fullWidth
        onChange={({ currentTarget: { value } }) => {
          setText(value);
        }}
        value={text}
      />
    </InputContainer>
  );
};
