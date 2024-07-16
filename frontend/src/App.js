import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import FormContainer from "./components/FormContainer";
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
          <Route element={<FormContainer />} path="login"/>
          <Route element={<FormContainer />} path="registration"/>
          <Route element={<PageNotFound />} path="*"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
