import "./App.css";
import { Outlet } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Logo />
      <Outlet />
      <Menu />
    </div>
  );
}

export default App;
