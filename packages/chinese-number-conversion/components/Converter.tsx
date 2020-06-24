import React from 'react';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const FlexContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  box-sizing: border-box;
  flex-grow: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  text-align: center;
  height: 40px;
  line-height: 40px;
  vertical-align: middle;
  border-bottom: solid 1px lightgray;
`;

const InputContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  line-height: 50px;
  padding-left: 15px;
  padding-right: 15px;
  flex-grow: 0;
  height: 50px;
`;

function NumberInput() {
  return (
    <InputContainer>
      <TextField
        id="number-input"
        label="Chinese Number Input"
        variant="standard"
        fullWidth
      />
    </InputContainer>
  );
}

function ResultDisplay() {
  return (
    <InputContainer>
      <TextField
        fullWidth
        label="Result"
        inputProps={{ readOnly: true }}
        value="123,556"
      />
    </InputContainer>
  );
}

export function Converter() {
  return (
    <FlexContainer>
      <Header>Chinese Number Conversion</Header>
      <NumberInput />
      <ResultDisplay />
    </FlexContainer>
  );
}
