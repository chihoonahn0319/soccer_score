import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { collection, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChange = (event) => setTitle(event.target.value);
  const onBodyChange = (event) => setBody(event.target.value);

  const onAddBtn = async (event) => {
    event.preventDefault();
    if (title === "" || body === "") {
      alert("빈칸 뒤진다.");
      return;
    }
    const newTodo = {
      title,
      body,
      isDone: false,
    };

    try {
      // Firestore에 데이터 추가
      const { id } = await addDoc(collection(db, "todos"), newTodo);
      // Redux 액션 디스패치
      dispatch(addTodo({ ...newTodo, id }));
      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Section>
      <FormArea>
        <Label htmlFor="form-title">
          이름
          <NameInput
            type="text"
            id="form-title"
            value={title}
            onChange={onTitleChange}
          />
        </Label>
        <Label htmlFor="form-body">
          <br />
          참석/골/어시
          <Input
            type="text"
            id="form-body"
            value={body}
            onChange={onBodyChange}
          />
        </Label>
        <FormButton onClick={onAddBtn}>추가</FormButton>
      </FormArea>
    </Section>
  );
}

export default Form;

const Section = styled.section`
  height: 120px;
  display: flex;
  align-items: center;
  padding: 20px 30px;
  background-color: #000000;
  border-radius: 10px;
`;

const FormArea = styled.form`
  width: 100%;
`;

const Label = styled.label`
  margin-right: 5px;

  color: white;
`;

const FormButton = styled.button`
  border: none;
  background-color: #000000;
  color: white;
  border: 3px solid white;
  margin-left: 10px; /* 추가 버튼과 입력란 사이에 여백을 추가 */
`;

const NameInput = styled.input`
  width: 260px;
  height: 40px;
  margin: 0 20px;
  margin-bottom: 10px;
  margin-left: 80px;

  border: none;
  border-radius: 100px;
  color: #050000;
`;

const Input = styled.input`
  width: 260px;
  height: 40px;
  margin: 0 20px;

  border: none;
  border-radius: 100px;
  color: #050000;
`;
