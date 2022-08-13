import * as React from "react";
import signIn from "../API/signin";

const Login = () => {
  const onClick = async () => {
    const [token, error] = await signIn("hello@hello.com", "hellohello");
    console.log(token, error);
  };
  return <div onClick={onClick}>Login</div>;
};

export default Login;
