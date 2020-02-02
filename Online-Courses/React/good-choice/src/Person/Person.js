import React from "react";
import "./Person.css";
const Person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      {/* use {} to use javascript directly */}

      <p>{props.children}</p>
      {/* use{props.childern} to render the children in the component  */}
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default Person;
