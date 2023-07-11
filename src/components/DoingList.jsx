import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadTodos } from "../redux/modules/todos";
import ListMap from "./card/Filter";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function DoingList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "todos"));
        const loadedTodos = querySnapshot.docs.map((doc) => doc.data());
        dispatch(loadTodos(loadedTodos));
      } catch (error) {
        console.error("Error fetching todos: ", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <section>
      <h1>기록🔥</h1>
      <ListArea>
        {todos
          .filter((todo) => !todo.isDone)
          .map((item) => (
            <ListMap key={item.id} item={item} />
          ))}
      </ListArea>
    </section>
  );
}

// DoingList.jsx 파일 상단에 아래 코드 추가
const ListArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export default DoingList;
