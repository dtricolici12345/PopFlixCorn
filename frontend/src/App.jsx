import Focus from "./components/Focus";
import "./App.css";

function App() {
  // Oppenheimer
  const video1 = {
    media_type: "movie",
    id: 181808,
  };

  return (
    <div className="App">
      <Focus video={video1} />
    </div>
  );
}

export default App;
