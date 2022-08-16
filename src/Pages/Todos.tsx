import React, { useEffect, useState } from "react";
import createTodoAPI from "../API/createTodoAPI";
import getTodosAPI from "../API/getTodosAPI";
import deleteTodoAPI from "../API/deleteTodoAPI";
import updateTodoAPI from "../API/updateTodoAPI";
import { useNavigate } from "react-router-dom";
import router from "../router";

const Todos = () => {
  const [todos, setTodos] = useState();
  console.log(todos);
  const create = async () => {
    const data = await createTodoAPI(
      "공부하기",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxkZGRvQGhlbGxvLmNvbSIsInN1YiI6MjU1LCJpYXQiOjE2NjA0MDI4ODQsImV4cCI6MTY2MTAwNzY4NH0.dkQigOXKmob1924an2QhZZRa14OMWkpnjCNgZ8o9f8o"
    );
    console.log(data);
  };

  const update = async () => {
    const data = await updateTodoAPI(
      457,
      "수정",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxkZGRvQGhlbGxvLmNvbSIsInN1YiI6MjU1LCJpYXQiOjE2NjA0MDI4ODQsImV4cCI6MTY2MTAwNzY4NH0.dkQigOXKmob1924an2QhZZRa14OMWkpnjCNgZ8o9f8o",
      false
    );
    console.log(data);
  };

  const deleteTodo = async () => {
    await deleteTodoAPI(
      457,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxkZGRvQGhlbGxvLmNvbSIsInN1YiI6MjU1LCJpYXQiOjE2NjA0MDI4ODQsImV4cCI6MTY2MTAwNzY4NH0.dkQigOXKmob1924an2QhZZRa14OMWkpnjCNgZ8o9f8o"
    );
  };

  useEffect(() => {
    const getTodo = async () => {
      const todos = await getTodosAPI(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxkZGRvQGhlbGxvLmNvbSIsInN1YiI6MjU1LCJpYXQiOjE2NjA0MDI4ODQsImV4cCI6MTY2MTAwNzY4NH0.dkQigOXKmob1924an2QhZZRa14OMWkpnjCNgZ8o9f8o"
      );
      setTodos(todos);
    };
    getTodo();
    return () => {
      getTodo();
    };
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (!Boolean(localStorage.getItem("token"))) {
      navigate(router.signin);
    }
  }, []);

  return (
    <div>
      <button onClick={create}>create todo</button>
      <button onClick={update}>update todo</button>
      <button onClick={deleteTodo}>delete todo</button>
    </div>
  );
};

export default Todos;
