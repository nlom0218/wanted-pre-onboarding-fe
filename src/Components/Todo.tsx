import React, { useState } from "react";
import updateTodoAPI from "../API/updateTodoAPI";
import { ITodos } from "../Pages/Todos";

const Todo = ({ id, todo, isCompleted, token }: ITodos) => {
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

  // const deleteTodo = async () => {
  //   await deleteTodoAPI(
  //     457,
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxkZGRvQGhlbGxvLmNvbSIsInN1YiI6MjU1LCJpYXQiOjE2NjA0MDI4ODQsImV4cCI6MTY2MTAwNzY4NH0.dkQigOXKmob1924an2QhZZRa14OMWkpnjCNgZ8o9f8o"
  //   );
  // };
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
    </div>
  );
};

export default Todo;
