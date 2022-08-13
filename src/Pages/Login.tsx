import * as React from "react";
import signIn from "../API/signin";

const Login = () => {
  const onClick = async () => {
    const [token, error] = await signIn("hel@hedddllo.com", "heldfslohello");
    console.log(token, error);
  };
  return <div onClick={onClick}>Login</div>;
};

export default Login;
