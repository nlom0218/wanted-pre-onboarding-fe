import React from "react";
import { Link } from "react-router-dom";
import SignContainer from "../Components/SignContainer";
import SigninForm from "../Components/SigninForm";
import router from "../router";

const Signin = () => {
  return (
    <SignContainer>
      <div className="sign_title">Sign In</div>
      <SigninForm submit="Sign in" type="SIGN_IN" />
      <div className="sign_contents">
        아직 가입을 하지 않으셨나요?
        <Link to={router.signup}>회원가입하기</Link>
      </div>
    </SignContainer>
  );
};

export default Signin;
