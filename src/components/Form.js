import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, filterTask } from "../JS/Actions/Actions";
function Form() {
  const [myInput, setMyInput] = useState("");
  const dispatch = useDispatch();
  const addTodo = (e) => {
    e.preventDefault();
    if (myInput) {
      dispatch(addTask({ text: myInput, id: Math.random(), completed: false }));
      setMyInput("");
    } else {
      alert("Can't add an empty TODO !!");
    }
  };
  return (
    <form onSubmit={addTodo}>
      <input
        value={myInput}
        onChange={(e) => setMyInput(e.target.value)}
        type="text"
        className="todo-input"
      />
      <button onClick={addTodo} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          name="todos"
          onChange={(e) => dispatch(filterTask(e.target.value))}
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
export default Form;
