import React from "react";
import { Link } from "react-router-dom";
import SigninForm from "../Components/SigninForm";
import router from "../router";

const Signin = () => {
  return (
    <div>
      <SigninForm submit="Sign in" type="SIGN_IN" />
      <div>
        아직 가입을 하지 않으셨나요?{" "}
        <Link to={router.signup}>회원가입하기</Link>
      </div>
    </div>
  );
};

export default Signin;
