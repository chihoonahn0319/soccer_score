import React from "react";
//React는 React 라이브러리에서 React 객체를 가져옴
import { useSelector } from "react-redux";
import ListMap from "./card/Filter";
import styled from "styled-components";

function OKList() {
  // useSelector로 store에서 전역 state 가져오기
  const todos = useSelector((state) => state.todos);

  return (
    <section>
      <h1>확인🎉</h1>
      <ListArea>
        {todos
          .filter((todos) => todos.isDone)
          .map((item) => (
            <ListMap key={item.id} item={item} />
          ))}
      </ListArea>
    </section>
  );
}

export default OKList;

//OK 카드 리스트 CSS DOING 카드리스트와 동일
const ListArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
