import { useEffect, useState } from "react";
import getTodosAPI from "../API/getTodosAPI";
import { useNavigate } from "react-router-dom";
import router from "../router";
import Todo from "../Components/Todo";
import CreateTodo from "../Components/CreateTodo";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 80px;
  flex-direction: column;
  align-items: center;
`;

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
    <Container>
      <CreateTodo token={token} getTodo={getTodo} />
      <div>
        {todos &&
          todos.map((item) => {
            return (
              <Todo key={item.id} {...item} token={token} getTodo={getTodo} />
            );
          })}
      </div>
    </Container>
  );
};

export default Todos;
