import React, { useState } from "react";
import signinAPI from "../API/signinAPI";
import signupAPI from "../API/signupAPI";

interface ISigninForm {
  submit: string;
  type: "SIGN_IN" | "SIGN_UP";
}

const SigninForm = ({ submit, type }: ISigninForm) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (type === "SIGN_IN") {
      const [token, errorMsg] = await signinAPI(email, password);
      if (token) localStorage.setItem("token", token);
      if (errorMsg) window.alert(errorMsg);
    }

    if (type === "SIGN_UP") {
      const [token, error] = await signupAPI(email, password);
      if (token) {
        localStorage.setItem("token", token);
      } else if (error) {
        window.alert(error);
      }
    }
  };

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
