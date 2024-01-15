import React, { useEffect } from "react";
import "./App.css";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const timeoutId = setTimeout(() => {
        navigate("/home");
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }

    return undefined;
  }, [location, navigate]);

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
