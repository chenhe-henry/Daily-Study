import React, { useState } from "react";
import "./scss/App.scss";
import Person from "./Person/Person";

const App = props => {
  //  array destructuring, use [initial state, function(to change the state)]
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState("SOME OTHER VALUE");

  console.log(personState, otherState);

  const switchNameHandler = () => {
    console.log("Was clicked!");
    setPersonState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    });
  };

  return (
    <div className="App">
      {/* todo: add more content and component here */}
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
    </div>
  );
};

export default App;
