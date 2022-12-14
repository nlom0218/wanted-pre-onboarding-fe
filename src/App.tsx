import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Todos from "./Pages/Todos";
import router from "./router";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path={router.home} element={<Home />} />
      <Route path={router.signin} element={<Signin />} />
      <Route path={router.signup} element={<Signup />} />
      <Route path={router.todos} element={<Todos />} />
    </Routes>
  );
}

export default App;
