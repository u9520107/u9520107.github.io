import React from 'react';
import { TextField } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { InputContainer } from './InputContainer';
import { resultState } from '../states';

export function ResultDisplay() {
  const result = useRecoilValue(resultState);
  return (
    <InputContainer>
      <TextField
        fullWidth
        label="Result"
        inputProps={{ readOnly: true }}
        value={result}
      />
    </InputContainer>
  );
}
