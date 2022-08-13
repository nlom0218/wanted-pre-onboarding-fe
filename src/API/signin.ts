import axios from "axios";

const signIn = async (email: string, password: string) => {
  let token;
  let error;
  try {
    const res = await axios.post(
      "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/auth/signin",
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
    error = "이메일 또는 비밀번호가 틀립니다😅";
  }
  return [token, error];
};

export default signIn;
