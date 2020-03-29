import React from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

class App extends React.Component {
  state = { contents: [] };

  componentDidMount() {
    var requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch("https://www.who.int/rss-feeds/news-english.xml", requestOptions)
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(result => {
        console.log(result);
        this.setState({ contents: result });
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.contents}</p>
        </header>
      </div>
    );
  }
}

export default App;
