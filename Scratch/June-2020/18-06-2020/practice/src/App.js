import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Swtich, Route, Switch } from "react-router-dom";
import Header from "./Header";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route />
          <Route />
          <Route />
        </Switch>
      </div>
    );
  }
}

export default App;
