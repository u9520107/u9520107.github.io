import React, { FC } from 'react';
import { Switch, FormControlLabel, FormGroup } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { InputContainer } from './InputContainer';
import { commaState } from '../states';

export const UseComma: FC = () => {
  const [comma, setComma] = useRecoilState(commaState);
  return (
    <InputContainer>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={comma}
              onChange={({ currentTarget: { checked } }) => setComma(checked)}
            />
          }
          label="Use Comma"
        />
      </FormGroup>
    </InputContainer>
  );
};
