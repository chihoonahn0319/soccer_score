import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChange = (event) => setTitle(event.target.value);
  const onBodyChange = (event) => setBody(event.target.value);

  const onAddBtn = (event) => {
    event.preventDefault();
    if (title === "" || body === "") {
      alert("빈칸 뒤진다 진짜.");
      return;
    }
    const newTodo = {
      id: uuidv4(),
      title,
      body,
      OK: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setBody("");
  };

  return (
    <Section>
      <FormArea>
        <Label htmlFor="form-title">
          이름
          <Input
            type="text"
            id="form-title"
            value={title}
            onChange={onTitleChange}
          />
        </Label>
        <Label htmlFor="form-body">
          참가/골/어시
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
  height: 100px;
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
  color: white; /* 흰색으로 설정 */
`;

const FormButton = styled.button`
  border: none;
  float: right;
  background-color: #000000;
  color: white;
  border: 3px solid white;
`;

const Input = styled.input`
  width: 260px;
  height: 40px;
  margin: 0 20px;
  border: none;
  border-radius: 100px;
  color: #050000; /* 흰색으로 설정 */
`;
