import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App ">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <Dictionary />
        <footer>
          <a href="https://github.com/MthabiKT/dictionary-project">
            Open-source code
          </a>
          , by{" "}
          <a href="https://transcendent-puffpuff-129473.netlify.app/">
            Mthabi.T
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
