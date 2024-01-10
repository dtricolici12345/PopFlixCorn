import Focus from "./components/Focus";
import "./App.css";

function App() {
  const movie = { id: 157336 };
  return (
    <div className="App">
      <Focus movie={movie} />
    </div>
  );
}

export default App;
