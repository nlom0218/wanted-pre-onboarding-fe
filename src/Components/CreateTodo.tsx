import React, { useState } from "react";
import createTodoAPI from "../API/createTodoAPI";
import { GrSend } from "react-icons/gr";
import styled from "styled-components";

const Form = styled.form`
  min-width: 600px;
  display: flex;
  input {
    display: block;
    width: 100%;
    padding: 5px 10px;
    border-bottom: 2px solid #dba55e;
    margin-right: 10px;
    background-color: #eacda3;
  }
  button {
    background-color: #eacda3;
    border: none;
    cursor: pointer;
    font-size: 18px;
    display: flex;
    align-items: center;
  }
`;

interface ICreateTodo {
  token: string | null;
  getTodo: () => {};
}

const CreateTodo = ({ token, getTodo }: ICreateTodo) => {
  const [todo, setTodo] = useState("");

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setTodo("");
    if (!token) return;
    await createTodoAPI(todo, token);
    getTodo();
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Write to dos"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>
        <GrSend />
      </button>
    </Form>
  );
};

export default CreateTodo;
