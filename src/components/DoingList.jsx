import React from "react";
//React는 React 라이브러리에서 React 객체를 가져옴
//이를 통해 컴포넌트에서 Redux store의 데이터를 읽을 수 있다
import { useSelector } from "react-redux";
//useSelector를 사용하여 state 매개변수를 전달하고,
// 이를 통해 state.todos에 접근하여 전역 상태인 할 일 목록(todos)을 가져옴
import ListMap from "./card/Filter";
// 현재 파일에서 ListMap 컴포넌트를 가져오기 위한 import 구문입니다.
import styled from "styled-components";
//styled-components 모듈을 가져옵니다.
//이 모듈은 CSS-in-JS 스타일링을 지원하는 라이브러리

function DoingList() {
  // useSelector로 store에서 전역 state 가져오기
  const todos = useSelector((state) => state.todos);

  return (
    <section>
      <h1>기록🔥</h1>
      <ListArea>
        {todos
          .filter((todos) => !todos.isDone)
          .map((item) => (
            <ListMap key={item.id} item={item} />
          ))}
      </ListArea>
    </section>
  );
}

export default DoingList;

//doing 리스트 카드 목록 css
const ListArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
