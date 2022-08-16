import React, { useState } from "react";
import signinAPI from "../API/signinAPI";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const [token, error] = await signinAPI(email, password);
  };
  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="submit"
        value="Sign in"
        disabled={!email.includes("@") || password.length < 8}
      />
    </form>
  );
};

export default Signin;
