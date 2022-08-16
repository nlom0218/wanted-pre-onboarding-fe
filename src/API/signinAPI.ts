import axios from "axios";

const signinAPI = async (email: string, password: string) => {
  let token;
  let errorMsg;
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
    errorMsg = false;
  } catch (error) {
    token = false;
    errorMsg = "이메일 또는 비밀번호가 틀립니다😅";
  }
  return [token, errorMsg];
};

export default signinAPI;
