import axios from "axios";

const signupAPI = async (email: string, password: string) => {
  let token;
  let error;
  try {
    const res = await axios.post(
      "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/auth/signup",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    token = res.data.access_token;
    error = false;
  } catch (error) {
    token = false;
    error = "이미 가입되어 있는 계정입니다😅";
  }
  return [token, error];
};

export default signupAPI;
