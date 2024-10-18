import "./App.css";
import GameWrapper from "./components/GameWrapper";
import Header from "./components/Header";

function App() {
  return (
    <div className="App-container">
      <div className="Game">
        <Header />
        <GameWrapper />
      </div>
    </div>
  );
}

export default App;
