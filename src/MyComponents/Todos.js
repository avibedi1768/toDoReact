// used rapc
import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  const myStyle={
    minHeight: '70vh',
    margin: '40px auto'
  }
  return (
  
    //my-3 tells margin(spacing) in y-axis
    <div className="container my-3" style={myStyle}>
      <h3 className="my-3">Todos List</h3>

      {/* for single todo item */}
      {/* <TodoItem todo={props.todos[2]} />     */}

      {/* for all todos,ie loop.... map returns an array */}
      {props.todos.length===0? "No todos to display":
      props.todos.map((todo) => 
         (
          <div key={todo.sno}>          
          <TodoItem todo={todo} onDelete={props.onDelete} />
          </div>
        )
      )}
      
    </div>
  
  );
};
