import { Route, Routes } from "react-router-dom";
import CreateAccount from "./Pages/CreateAccount";
import Login from "./Pages/Login";
import Todos from "./Pages/Todos";
import router from "./router";

function App() {
  return (
    <Routes>
      <Route path={router.login} element={<Login />} />
      <Route path={router.createAccount} element={<CreateAccount />} />
      <Route path={router.todos} element={<Todos />} />
    </Routes>
  );
}

export default App;
