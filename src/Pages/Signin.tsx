import * as React from "react";
import signinAPI from "../API/signinAPI";

const Signin = () => {
  const onClick = async () => {
    const [token, error] = await signinAPI("hel@hedddllo.com", "heldfslohello");
    console.log(token, error);
  };
  return <div onClick={onClick}>Signin</div>;
};

export default Signin;
