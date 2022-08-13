import * as React from "react";
import createTodo from "../API/createTodo";
import getTodos from "../API/getTodos";

const Todos = () => {
  const [todos, setTodos] = React.useState();
  const create = async () => {
    const data = await createTodo(
      "공부하기",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxkZGRvQGhlbGxvLmNvbSIsInN1YiI6MjU1LCJpYXQiOjE2NjA0MDI4ODQsImV4cCI6MTY2MTAwNzY4NH0.dkQigOXKmob1924an2QhZZRa14OMWkpnjCNgZ8o9f8o"
    );
    console.log(data);
  };

  React.useEffect(() => {
    const getTodo = async () => {
      const todos = await getTodos(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxkZGRvQGhlbGxvLmNvbSIsInN1YiI6MjU1LCJpYXQiOjE2NjA0MDI4ODQsImV4cCI6MTY2MTAwNzY4NH0.dkQigOXKmob1924an2QhZZRa14OMWkpnjCNgZ8o9f8o"
      );
      console.log(todos);
    };
    getTodo();
  }, []);

  return (
    <div>
      <button onClick={create}>create todo</button>
    </div>
  );
};

export default Todos;
