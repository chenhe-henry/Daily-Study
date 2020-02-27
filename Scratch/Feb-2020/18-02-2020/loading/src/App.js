import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {};
  loadingHandler = () => {
    alert("Hellow");
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="#"
            rel="noopener noreferrer"
            onClick={this.loadingHandler}
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
