import * as React from "react";
import signUp from "../API/signup";

const CreateAccount = () => {
  const onClick = async () => {
    const [token, error] = await signUp("hello@hello.com", "hellohello");
    console.log(token, error);
  };
  return <div onClick={onClick}>CreateAccount</div>;
};

export default CreateAccount;
