import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
function TodoList() {
  const Items = useSelector((state) => state.todos);
  const statu = useSelector((state) => state.status);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {Items.filter((el) =>
          statu === "completed"
            ? el.completed === true
            : statu === "uncompleted"
            ? el.completed === false
            : el
        ).map((todo, i) => (
          <Todo
            text={todo.text}
            key={i}
            id={todo.id}
            completed={todo.completed}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
