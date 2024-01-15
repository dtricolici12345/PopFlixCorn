import "./App.css";
import { Outlet } from "react-router-dom";
import "./components/Gallery.css";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
