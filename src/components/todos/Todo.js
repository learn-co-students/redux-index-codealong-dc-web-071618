import React from "react";

//2. Presentational component, no Redux
const Todo = props => {
  return <li>{props.text}</li>;
};

export default Todo;
