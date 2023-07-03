import React from "react";

export const TodoItem = ({ todo, onDelete }) => { //curly braces lgaye parameter ch, means destructure krya, so now no need to write props.todo. just write todo
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(todo);
        }}
        //ide ch arrow func krya. normal func call ni kri. bcz jdo normal func call krde a, odo rendering te time chal janda. with arrow func, button click hon te hi chalega func
      >
        Delete
      </button>
      <hr/>
    </div>
  );
};
  