import React from "react";
import "./Tasks.css";

function TodoRender({
  checked,
  handleChecked,
  checkFilter,
  tasks,
  search,
  handleDeleteTask,
  moveTaskUp,
  moveTaskDown,
}) {
  return (
    <ol>
      {tasks
        .map((task, index) => ({ task, index })) // Map tasks to objects with task and original index
        .filter(({ task }) => task.includes(search)) // Filter by search
        .filter(({ index }) => {
          // Filter based on check status using the original index
          if (checkFilter === "All") return true;
          if (checkFilter === "Checked") return checked[index];
          if (checkFilter === "Unchecked") return !checked[index];
          return true;
        })
        .map(({ task, index }) => (
          <li key={index} className="taskUnit">
            <div className="checkAndName">
              <input
                type="checkbox"
                checked={checked[index]}
                onChange={() => handleChecked(index)}
              />
              {task}
            </div>
            <div className="taskButtons">
              <button
                className="moveButton"
                onClick={(e) => {
                  e.preventDefault();
                  moveTaskUp(index);
                }}
              >
                ⬆️
              </button>
              <button
                className="moveButton"
                onClick={(e) => {
                  e.preventDefault();
                  moveTaskDown(index);
                }}
              >
                ⬇️
              </button>
              <button
                className="deleteButton"
                onClick={(e) => {
                  e.preventDefault();
                  handleDeleteTask(index);
                }}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
    </ol>
  );
}

export default TodoRender;
