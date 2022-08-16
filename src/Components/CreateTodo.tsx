import React, { useState } from "react";
import createTodoAPI from "../API/createTodoAPI";

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
    <div>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Write to dos"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default CreateTodo;
