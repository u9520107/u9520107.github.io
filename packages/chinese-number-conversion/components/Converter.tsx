import React, { FC } from 'react';
import styled from 'styled-components';
import { RecoilRoot } from 'recoil';
import { NumberInput } from './NumberInput';
import { UseComma } from './UseComma';
import { ResultDisplay } from './ResultDisplay';

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

const HistoryHeader = styled.div`
  box-sizing: border-box;
  flex-grow: 0;
  border-top: solid 1px lightgray;
  border-bottom: solid 1px lightgray;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const HistoryContainer = styled.div``;

const History: FC = () => {
  return (
    <>
      <HistoryHeader>History</HistoryHeader>
      <HistoryContainer>To be implemented</HistoryContainer>
    </>
  );
};

export function Converter() {
  return (
    <RecoilRoot>
      <FlexContainer>
        <Header>Chinese Number Conversion</Header>
        <NumberInput />
        <UseComma />
        <ResultDisplay />
        <History />
      </FlexContainer>
    </RecoilRoot>
  );
}
