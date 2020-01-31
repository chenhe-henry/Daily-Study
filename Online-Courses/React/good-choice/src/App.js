import React from "react";
import "./scss/App.scss";
import Person from "./Person/Person";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="App">
        {/* todo: add more content and component here */}
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29">
          My Hobbies: Racing
        </Person>
        <Person name="Stephanie" age="26" />
      </div>
    );
  }
}

export default App;
