import React from "react";
//import React from 'react';: React를 불러.
//React 컴포넌트를 작성하기 위해 필요
import { useSelector } from "react-redux";
//useSelector 훅을 불러온당
//. 이를 사용하여 Redux 스토어의 상태를 읽을 수 있습니다
import { useParams, useNavigate } from "react-router-dom";
// useParams와 useNavigate 훅을 불러옵니다.
// React Router의 기능을 활용하여 URL 매개변수를 사용하고
// 페이지 간의 이동을 관리할 수 있습니다
//치훈 이해하려하지마 받아드려 이 흐름을 넌 할수있다
import GlobalStyle from "../GlobalStyle";
//GlobalStyle 컴포넌트를 불러온다
//이를 사용하여 전체 앱에 적용되는 스타일을 설정할 수 있다
import styled from "styled-components";

// DetailPage 컴포넌트를 정의하는 함수형
function DetailPage() {
  const todos = useSelector((state) => state.todos);
  const params = useParams();
  //URL 생성
  const navigate = useNavigate();
  //페이지 이동 가능하게

  const foundData = todos.find((item) => item.id === params.id);
  //삭제나 완료 버튼 누를때처럼 id 찾는거 그래야 상세페이지를 가니께..
  return (
    <>
      <GlobalStyle />
      <Div>
        <Section>
          <InfoDiv>
            <span>ID : {foundData.id}</span>
            <Button onClick={() => navigate("/")}>이전으로</Button>
          </InfoDiv>
          <div>
            <h1>{foundData.title}</h1>
            <p>{foundData.body}</p>
          </div>
        </Section>
      </Div>
    </>
  );
}

export default DetailPage;

const Div = styled.div`
  height: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//상세보기 카드 CSS
const Section = styled.section`
  width: 800px;
  height: 300px;
  padding: 30px;
  border: 5px solid black;
  border-radius: 20px;
`;
//카드안 요소 위치
const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//이전으로 버튼
const Button = styled.button`
  border: 3px solid black;
`;
