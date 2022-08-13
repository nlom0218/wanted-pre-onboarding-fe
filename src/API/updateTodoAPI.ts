import axios from "axios";

const updateTodoAPI = async (
  todoId: number,
  todo: string,
  token: string,
  isCompleted: boolean
) => {
  try {
    const res = await axios.put(
      `https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos/${todoId}`,
      {
        todo,
        isCompleted,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {}
};

export default updateTodoAPI;
