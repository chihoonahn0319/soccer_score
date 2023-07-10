import React from "react";
import { useDispatch } from "react-redux";
//useDispatch 훅을 사용하여 액션 디스패치를 위한 dispatch 함수를 가져옴
//이걸로 컴포넌트에서 redux 액션을 발생시킴
import { toggleStatusTodo, deleteTodo } from "../../redux/modules/todos";
//toggleStatusTodo와 deleteTodo 액션 생성자 함수를 import 합니다.
//todos로 부터
import { Link } from "react-router-dom";
//Link 컴포넌트는 React Router를 사용하여 페이지 간의 링크를 생성.
//이를 통해 사용자가 클릭하면 다른 경로로 이동할 수 있는 링크를 생성
import styled from "styled-components";
//styled-components 모듈을 가져옵니다.
//이 모듈은 CSS-in-JS 스타일링을 지원하는 라이브러리

//Filter 컴포넌트는 각각의 할 일 항목을 렌더링
function Filter({ item }) {
  // useDispatch로 액션 객체 리듀서로 보내기
  const dispatch = useDispatch();

  // 완료 랑 취소 버튼 함수
  const ToggleBtn = (id) => dispatch(toggleStatusTodo(id));
  // 삭제 함수
  const DeleteBtn = (id) => dispatch(deleteTodo(id));

  return (
    <Todo key={item.id}>
      <Link to={`${item.id}`}>
        <LinkP>자세히보기</LinkP>
      </Link>
      <h1>{item.title}</h1>
      <p>{item.body}</p>
      <TodoBtnArea>
        <TodoDeleteBtn onClick={() => DeleteBtn(item.id)}>삭제</TodoDeleteBtn>
        <TodoCheckBtn onClick={() => ToggleBtn(item.id)}>
          {!item.isDone ? "완료" : "취소"}
        </TodoCheckBtn>
      </TodoBtnArea>
    </Todo>
  );
}

export default Filter;

//생성된 카드 css
const Todo = styled.div`
  width: 282px;
  padding: 20px 20px;
  border: 6px solid black;
  border-radius: 40px;
`;

//자세히보기 버튼
const LinkP = styled.p`
  font-size: 12px;
  float: right;
`;

//카드 배열 및 속성
const TodoBtnArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
`;

//삭제 버튼 css
const TodoDeleteBtn = styled.button`
  width: 110px;
  border: 2px solid red;
`;

//완료버튼 css
const TodoCheckBtn = styled.button`
  width: 110px;
  border: 2px solid green;
`;
