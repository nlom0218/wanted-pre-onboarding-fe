import axios from "axios";

const deleteTodoAPI = async (todoId: number, token: string) => {
  try {
    const res = await axios.delete(
      `https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos/${todoId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {}
};

export default deleteTodoAPI;
