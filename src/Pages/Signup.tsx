import React from "react";
import { Link } from "react-router-dom";
import signupAPI from "../API/signupAPI";
import SignContainer from "../Components/SignContainer";
import SigninForm from "../Components/SigninForm";
import router from "../router";

const Signup = () => {
  return (
    <SignContainer>
      <div className="sign_title">Sign Up</div>
      <SigninForm submit="Sign up & Sign in" type="SIGN_UP" />
      <div className="sign_contents">
        이메일이 있으신가요? <Link to={router.signin}>로그인하러가기</Link>
      </div>
    </SignContainer>
  );
};

export default Signup;
