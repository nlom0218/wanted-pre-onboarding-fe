import * as React from "react";
import signinAPI from "../API/signinAPI";

const Signin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
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
      <input type="submit" value="Sign in" disabled={true} />
    </form>
  );
};

export default Signin;
