import { useState } from "react";
import deleteTodoAPI from "../API/deleteTodoAPI";
import updateTodoAPI from "../API/updateTodoAPI";

interface ITodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  token: string | null;
  getTodo: () => {};
}

const Todo = ({ id, todo, isCompleted, token, getTodo }: ITodo) => {
  const [content, setContent] = useState(todo);
  const [isEdit, setIsEdit] = useState(false);

  const onClickEditBtn = async () => {
    if (isEdit) {
      if (!token) return;
      await updateTodoAPI(id, content, token, isCompleted);
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };

  const onClickCancelBtn = () => {
    setIsEdit(false);
    setContent(todo);
  };

  const onClickDelBtn = async () => {
    if (!token) return;
    await deleteTodoAPI(id, token);
    getTodo();
  };

  return (
    <div>
      <div>{isCompleted ? "완료" : "미완료"}</div>
      <div>
        <input
          value={content}
          readOnly={!isEdit}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <button onClick={onClickEditBtn}>수정하기</button>
        {isEdit && <button onClick={onClickCancelBtn}>취소하기</button>}
      </div>
      <div>
        <button onClick={onClickDelBtn}>삭제하기</button>
      </div>
    </div>
  );
};

export default Todo;
