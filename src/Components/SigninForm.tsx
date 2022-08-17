import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import signinAPI from "../API/signinAPI";
import signupAPI from "../API/signupAPI";
import router from "../router";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  input {
    margin-bottom: 20px;
  }
  input[placeholder] {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #dcaf73;
    background-color: #e7c089;
    color: #272727;
    ::placeholder {
      color: #6b6b6b;
    }
  }
  input[type="submit"] {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 10px;
    background-color: #e5a852;
    border-radius: 10px;
  }
`;

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
    <Form onSubmit={onSubmitForm}>
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
    </Form>
  );
};

export default SigninForm;
