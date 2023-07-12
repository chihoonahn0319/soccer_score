import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  button {
    width: 140px;
    height: 40px;
    margin: 0;
    background-color: transparent;
    cursor: pointer;
    border-radius: 40px;
  }

  body {
    margin: 0;
  }


`;

export default GlobalStyle;
