import React from "react";
import "./Todo.css";

function TodoRender({
  tasks,
  search,
  handleDeleteTask,
  moveTaskUp,
  moveTaskDown,
}) {
  if (!tasks) return null;
  return (
    <div className="render">
      <ol>
        {tasks
          .filter((task) => task.includes(search))
          .map((task, index) => (
            <li key={index}>
              {task}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleDeleteTask(index);
                }}
              >
                Delete
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  moveTaskUp(index);
                }}
              >
                Move Up
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  moveTaskDown(index);
                }}
              >
                Move Down
              </button>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default TodoRender;
