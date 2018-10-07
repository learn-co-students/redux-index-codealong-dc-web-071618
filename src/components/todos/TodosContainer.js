import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class TodosContainer extends Component {
  //3. map and send props to Todo to be rendered
  renderTodos = () =>
    this.props.todos.map((todo, id) => <Todo key={id} text={todo} />);

  render() {
    return <div>{this.renderTodos()}</div>;
  }
}

//1. Get to do from store, connect to Redux. Not dispatching actions here - only getting state from Redux --> so only need mapStateToProps()
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodosContainer);
