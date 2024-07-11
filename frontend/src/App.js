import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import PageNotFound from "./components/PageNotFound";
import ProtectedRouter from "./components/ProtectedRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={
            <ProtectedRouter>
              <Home />
            </ProtectedRouter>
          } path="/"/>
          <Route element={<LoginForm />} path="login"/>
          <Route element={<RegistrationForm />} path="registration"/>
          <Route element={<PageNotFound />} path="*"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
