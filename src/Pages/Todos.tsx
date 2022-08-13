import * as React from "react";
import createTodo from "../API/createTodo";
import getTodos from "../API/getTodos";
import deleteTodoAPI from "../API/deleteTodoAPI";
import updateTodoAPI from "../API/updateTodoAPI";

const Todos = () => {
  const [todos, setTodos] = React.useState();
  console.log(todos);
  const create = async () => {
    const data = await createTodo(
      "공부하기",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxkZGRvQGhlbGxvLmNvbSIsInN1YiI6MjU1LCJpYXQiOjE2NjA0MDI4ODQsImV4cCI6MTY2MTAwNzY4NH0.dkQigOXKmob1924an2QhZZRa14OMWkpnjCNgZ8o9f8o"
    );
    console.log(data);
  };

  const update = async () => {
    const data = await updateTodoAPI(
      455,
      "수정",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxkZGRvQGhlbGxvLmNvbSIsInN1YiI6MjU1LCJpYXQiOjE2NjA0MDI4ODQsImV4cCI6MTY2MTAwNzY4NH0.dkQigOXKmob1924an2QhZZRa14OMWkpnjCNgZ8o9f8o",
      false
    );
    console.log(data);
  };

  const deleteTodo = async () => {
    await deleteTodoAPI(
      455,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxkZGRvQGhlbGxvLmNvbSIsInN1YiI6MjU1LCJpYXQiOjE2NjA0MDI4ODQsImV4cCI6MTY2MTAwNzY4NH0.dkQigOXKmob1924an2QhZZRa14OMWkpnjCNgZ8o9f8o"
    );
  };

  React.useEffect(() => {
    const getTodo = async () => {
      const todos = await getTodos(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxkZGRvQGhlbGxvLmNvbSIsInN1YiI6MjU1LCJpYXQiOjE2NjA0MDI4ODQsImV4cCI6MTY2MTAwNzY4NH0.dkQigOXKmob1924an2QhZZRa14OMWkpnjCNgZ8o9f8o"
      );
      setTodos(todos);
    };
    getTodo();
    return () => {
      getTodo();
    };
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
