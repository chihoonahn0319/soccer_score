import React from "react";
import { createGlobalStyle } from "styled-components";

//styled-components 라이브러리에서 제공하는 함수
//전역적으로 적용되는 스타일을 생성할 때 사용

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  //버튼의 기본 값 
  button {
    width: 140px;
    height: 40px;
    margin: 0;
    background-color: transparent;
    cursor: pointer;
    border-radius: 40px;
  }

    //페이지 여백 설정
    body {
    margin: 0;
  }

`;

export default GlobalStyle;
//GlobalStyle 컴포넌트를 외부로 내보냄
// 이를 통해 다른 파일에서 GlobalStyle 컴포넌트를
//전역 스타일을 적용할 수 있습
