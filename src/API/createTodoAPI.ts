import axios from "axios";

const createTodoAPI = async (todo: string, token: string) => {
  try {
    const res = await axios.post(
      "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos",
      {
        todo,
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

export default createTodoAPI;
