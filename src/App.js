import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { GlobalStyled } from "./styled";

function App() {
  const isLoggedIn = false;

  return (
    <Router>
      <GlobalStyled />
      <Routes>
        <Route path={routes.home} element={isLoggedIn ? <Home /> : <Login />} />
        <Route path="/*" element={""} />
      </Routes>
    </Router>
  );
}

export default App;
