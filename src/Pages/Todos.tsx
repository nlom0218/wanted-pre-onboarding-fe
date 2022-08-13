import * as React from "react";
import createTodo from "../API/createTodo";

const Todos = () => {
  const create = async () => {
    const data = await createTodo(
      "공부하기",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvQGhlbGxvLmNvbSIsImlhdCI6MTY2MDQwMjA2MCwiZXhwIjoxNjYxMDA2ODYwfQ.ttTB_p1fWFWJapcvA_kZCXSmmTRRbT4YIYV7dtt6eVI"
    );
    console.log(data);
  };

  return (
    <div>
      <button onClick={create}>create todo</button>
    </div>
  );
};

export default Todos;
