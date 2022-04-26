import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { SignUp } from "./screens/SignUp";
import { GlobalStyled } from "./styled";

function App() {
  const isLoggedIn = false;

  return (
    <Router>
      <GlobalStyled />
      <Routes>
        <Route path={routes.home} element={isLoggedIn ? <Home /> : <Login />} />
        {isLoggedIn ? null : (
          <Route path={routes.signup} element={<SignUp />} />
        )}
        <Route path="/*" element={""} />
      </Routes>
    </Router>
  );
}

export default App;
