import { useState } from "react";
import deleteTodoAPI from "../API/deleteTodoAPI";
import updateTodoAPI from "../API/updateTodoAPI";
import { BsCheck2Square, BsSquare } from "react-icons/bs";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  min-width: 600px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 10px;
  background-color: #eac085;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: transform 0.3s linear;
  :hover {
    transform: scale(1.05);
  }
  :last-child {
    margin-bottom: 20px;
  }
`;

interface IInput {
  isEdit: boolean;
}

const Input = styled.input<IInput>`
  display: block;
  width: 100%;
  padding: 5px;
  background-color: #eac085;
  border-bottom: 1px solid transparent;
  border-bottom: ${(props) => props.isEdit && "1px solid #dba55e"};
`;

const BtnContainer = styled.div`
  grid-column: 1 / -1;
  justify-self: end;
  .todo_btn {
    width: 80px;
    padding: 5px 0px;
    background-color: #e5a852;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    :first-child {
      margin-right: 10px;
    }
  }
`;

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
    <Container>
      <div>{isCompleted ? <BsCheck2Square /> : <BsSquare />}</div>
      <div>
        <Input
          value={content}
          readOnly={!isEdit}
          onChange={(e) => setContent(e.target.value)}
          isEdit={isEdit}
        />
      </div>
      <BtnContainer>
        <button className="todo_btn" onClick={onClickEditBtn}>
          Edit
        </button>
        {isEdit ? (
          <button className="todo_btn" onClick={onClickCancelBtn}>
            Cancel
          </button>
        ) : (
          <button className="todo_btn" onClick={onClickDelBtn}>
            Delete
          </button>
        )}
      </BtnContainer>
    </Container>
  );
};

export default Todo;
