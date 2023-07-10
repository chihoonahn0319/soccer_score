import React from "react";
//React는 React 라이브러리에서 React 객체를 가져옴
import styled from "styled-components";
//styled-components는 스타일을 정의하고 적용하는 데 사용

function Header() {
  return (
    <Section>
      <span>WSC 스탯</span>
      <HeaderName>박상수 최고</HeaderName>
    </Section>
  );
}

export default Header;
//Header 컴포넌트를 export
//이러면 다른 파일에서 Header 컴포넌트를 import하여 사용

const Section = styled.section`
  //헤더 파일 css
  margin: 20px 20px;
`;

const HeaderName = styled.span`
  //react text 위치
  float: right;
`;
