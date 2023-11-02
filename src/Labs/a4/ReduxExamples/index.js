import React from "react";
import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoForm from "./todos/TodoForm";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";


const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux/>
      <CounterRedux/>
      <AddRedux/>
      <TodoList/>

      

    </div>
  );
};

export default ReduxExamples;