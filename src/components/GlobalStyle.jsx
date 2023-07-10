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

  @media (max-width: 768px) {
    /* 페이지 너비가 768px 이하일 때 적용되는 스타일 */
    button {
      width: 100px;
      height: 30px;
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;
