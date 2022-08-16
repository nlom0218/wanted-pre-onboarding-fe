import React from "react";
import { Link } from "react-router-dom";
import SigninForm from "../Components/SigninForm";
import router from "../router";

const Signup = () => {
  return (
    <div>
      <SigninForm submit="Sign up & Sign in" type="SIGN_UP" />
      <div>
        이메일이 있으신가요? <Link to={router.signin}>로그인하러가기</Link>
      </div>
    </div>
  );
};

export default Signup;
