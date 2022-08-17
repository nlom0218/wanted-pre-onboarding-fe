import { useEffect, useState } from "react";
import getTodosAPI from "../API/getTodosAPI";
import { useNavigate } from "react-router-dom";
import router from "../router";
import Todo from "../Components/Todo";
import CreateTodo from "../Components/CreateTodo";

export interface ITodos {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const Todos = () => {
  const token = localStorage.getItem("token");
  const [todos, setTodos] = useState<ITodos[]>();
  const navigate = useNavigate();

  const getTodo = async () => {
    if (!token) return;
    const todos = await getTodosAPI(token);
    setTodos(todos);
  };

  useEffect(() => {
    getTodo();
  }, []);

  useEffect(() => {
    if (!token) {
      navigate(router.signin);
    }
  }, []);

  return (
    <div>
      <CreateTodo token={token} getTodo={getTodo} />
      <div>
        {todos &&
          todos.map((item) => {
            return (
              <Todo key={item.id} {...item} token={token} getTodo={getTodo} />
            );
          })}
      </div>
    </div>
  );
};

export default Todos;
