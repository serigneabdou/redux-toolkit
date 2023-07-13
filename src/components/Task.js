import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

function Task() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const addNewTask = (e) => {
    e.preventDefault()
    const task = inputRef.current.value.trim();

    if (task !== "") {
      dispatch(addTodo(task));
      inputRef.current.value = "";
    }
  };

  return (
    <div className="task-component">
      <div className="add-task">
        <input
          type="text"
          placeholder="Add task here"
          ref={inputRef}
          className="taskinput"
        />
        <button onClick={addNewTask}>Add Task</button>
      </div>
    </div>
  );
}

export default Task;
