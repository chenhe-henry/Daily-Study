import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Headroom from "react-headroom";
import cogoToast from "cogo-toast";

function App() {
  const clickhandler = () => {
    cogoToast.success("This is success", {
      position: "top-right",
      heading: "Congrats",
    });

    cogoToast.loading("Loading your data...").then(() => {
      cogoToast.success("Data Successfully Loaded");
    });
  };
  return (
    <div className="App">
      <Headroom
        style={{
          transition: "all .5s ease-in-out",
          backgroundColor: "aqua",
        }}
      >
        <h1>This is the headroom</h1>
      </Headroom>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
          onClick={clickhandler}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
