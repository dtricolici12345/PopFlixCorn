import { React, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/home");
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}
export default App;
