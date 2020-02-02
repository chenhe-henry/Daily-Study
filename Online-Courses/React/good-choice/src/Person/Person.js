import React from "react";

const Person = props => {
  return (
    <div>
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      {/* use {} to use javascript directly */}

      <p>{props.children}</p>
      {/* use{props.childern} to render the children in the component  */}
    </div>
  );
};

export default Person;
