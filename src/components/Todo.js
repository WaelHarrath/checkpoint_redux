import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, checkTask } from "../JS/Actions/Actions";
import EditTodo from "./EditTodo";
function Todo({ text, todo, id, completed }) {
  const dispatch = useDispatch();
  return (
    <div className="todo">
      <li className={`todo-item ${completed ? "completed" : ""}  `}>{text}</li>
      <EditTodo todo={todo} />
      <button onClick={() => dispatch(checkTask(id))} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => dispatch(deleteTask(id))} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
export default Todo;
