import { useEffect, useState } from "react";
import getTodosAPI from "../API/getTodosAPI";
import { useNavigate } from "react-router-dom";
import router from "../router";
import Todo from "../Components/Todo";

export interface ITodos {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const Todos = () => {
  const [todos, setTodos] = useState<ITodos[]>();
  // const create = async () => {
  //   const data = await createTodoAPI(
  //     "공부하기2",
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im15ZW1haWxAZW1haWwuY29tIiwic3ViIjo2NjIsImlhdCI6MTY2MDY0MzMwMiwiZXhwIjoxNjYxMjQ4MTAyfQ.PBqC9JNL7bJNreqZ2IPv8v9I_XaVeZL8jGYwF_oAlps"
  //   );
  //   console.log(data);
  // };

  useEffect(() => {
    const getTodo = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      const todos = await getTodosAPI(token);
      setTodos(todos);
    };
    getTodo();
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (!Boolean(localStorage.getItem("token"))) {
      navigate(router.signin);
    }
  }, []);

  return (
    <div>
      {todos &&
        todos.map((item) => {
          return <Todo key={item.id} {...item} />;
        })}
    </div>
  );
};

export default Todos;
