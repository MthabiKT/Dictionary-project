import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Dictionary />
      <div className="btn btn-primary shadow">Hello there</div>
    </div>
  );
}

export default App;
