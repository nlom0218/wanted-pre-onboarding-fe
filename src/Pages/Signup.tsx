import * as React from "react";
import signupAPI from "../API/signupAPI";

const Signup = () => {
  const onClick = async () => {
    const [token, error] = await signupAPI("helldddo@hello.com", "hellohello");
    console.log(token, error);
  };
  return <div onClick={onClick}>Signup</div>;
};

export default Signup;
