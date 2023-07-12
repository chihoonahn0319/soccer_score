import React from "react";
import { useDispatch } from "react-redux";
import { toggleStatusTodo, deleteTodo } from "../../redux/modules/todos";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

//Filter 컴포넌트는 각각의 할 일 항목을 렌더링
function Filter({ item }) {
  // useDispatch로 액션 객체 리듀서로 보내기
  const dispatch = useDispatch();

  // 완료 랑 취소 버튼 함수
  const ToggleBtn = async (id) => {
    const todoRef = doc(db, "todos", id);
    await updateDoc(todoRef, { ...item, isDone: !item.isDone });
    dispatch(toggleStatusTodo(id));
  };
  // 삭제 함수
  const DeleteBtn = async (id) => {
    const todoRef = doc(db, "todos", id);
    await deleteDoc(todoRef);
    dispatch(deleteTodo(id));
  };

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
