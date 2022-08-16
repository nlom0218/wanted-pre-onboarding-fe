import React from "react";
import { ITodos } from "../Pages/Todos";

const Todo = ({ id, todo, isCompleted, userId }: ITodos) => {
  // const update = async () => {
  //   const data = await updateTodoAPI(
  //     457,
  //     "수정",
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxkZGRvQGhlbGxvLmNvbSIsInN1YiI6MjU1LCJpYXQiOjE2NjA0MDI4ODQsImV4cCI6MTY2MTAwNzY4NH0.dkQigOXKmob1924an2QhZZRa14OMWkpnjCNgZ8o9f8o",
  //     false
  //   );
  //   console.log(data);
  // };

  // const deleteTodo = async () => {
  //   await deleteTodoAPI(
  //     457,
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxkZGRvQGhlbGxvLmNvbSIsInN1YiI6MjU1LCJpYXQiOjE2NjA0MDI4ODQsImV4cCI6MTY2MTAwNzY4NH0.dkQigOXKmob1924an2QhZZRa14OMWkpnjCNgZ8o9f8o"
  //   );
  // };
  return (
    <div>
      {id} / {todo} / {userId} / {isCompleted ? "완료" : "미완료"}
    </div>
  );
};

export default Todo;
