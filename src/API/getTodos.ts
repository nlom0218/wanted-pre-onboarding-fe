import axios from "axios";

const getTodos = async (token: string) => {
  try {
    const res = await axios.get(
      "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {}
};

export default getTodos;
