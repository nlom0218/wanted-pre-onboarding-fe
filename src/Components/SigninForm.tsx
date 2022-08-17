import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import signinAPI from "../API/signinAPI";
import signupAPI from "../API/signupAPI";
import router from "../router";

interface ISigninForm {
  submit: string;
  type: "SIGN_IN" | "SIGN_UP";
}

const SigninForm = ({ submit, type }: ISigninForm) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState<undefined | string>(undefined);

  const navigate = useNavigate();

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (type === "SIGN_IN") {
      const [token, errorMsg] = await signinAPI(email, password);
      if (token) setToken(token);
      if (errorMsg) window.alert(errorMsg);
    }

    if (type === "SIGN_UP") {
      const [token, errorMsg] = await signupAPI(email, password);
      if (token) setToken(token);
      if (errorMsg) window.alert(errorMsg);
    }
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      navigate(router.todos);
    }
  }, [token]);

  useEffect(() => {
    if (Boolean(localStorage.getItem("token"))) {
      navigate(router.todos);
    }
  }, []);

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="off"
        placeholder="Enter your email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="off"
        placeholder="Enter password"
      />
      <input
        type="submit"
        value={submit}
        disabled={!email.includes("@") || password.length < 8}
      />
    </form>
  );
};

export default SigninForm;
