import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/"/>
          <Route element={<LoginForm />} path="login"/>
          <Route element={<RegistrationForm />} path="registration"/>
          <Route element={<PageNotFound />} path="*"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
