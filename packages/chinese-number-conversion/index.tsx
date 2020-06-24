import React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Converter } from "./components/Converter";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

render(
  <>
    <GlobalStyle />
    <Converter />
  </>,
  document.querySelector("#viewport")
);
