import React from "react";
//React 모듈을 가져옵니다.
//이 모듈은 React 애플리케이션 개발에 필요한 핵심 기능을 제공
import Header from "./Header";
import Form from "./Form";
import DoingList from "./DoingList";
import OKList from "./OKList";
import GlobalStyle from "./GlobalStyle";
//Header, Form, DoingList, OKList 컴포넌트들과
//GlobalStyle 모듈을 해당 파일에서 사용하기 위해 가져옵
import styled from "styled-components";
//styled-components 모듈을 가져옵니다.
//이 모듈은 CSS-in-JS 스타일링을 지원하는 라이브러리

//Main 함수형 컴포넌트:

function Main() {
  return (
    <>
      <GlobalStyle />
      <Wrap>
        <Header />
        <Form />
        <DoingList />
        <OKList />
      </Wrap>
    </>
  );
}

export default Main;
//Main 컴포넌트를 export
//이러면 다른 파일에서 Main 컴포넌트를 import하여 사용

//메인페이지 좌우 길이
const Wrap = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`;
