import React, { useState } from "react";
import TodoRender from "./TodoRender";
import "./Todo.css";

function TodoHandleForm() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task !== "") {
      setTasks([...tasks, task]);
    }
    setTask("");
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((tasks, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index === 0) return;
    const newTasks = [...tasks];
    const temp = newTasks[index];
    newTasks[index] = newTasks[index - 1];
    newTasks[index - 1] = temp;
    setTasks(newTasks);
  };

  const moveTaskDown = (index) => {
    if (index === tasks.length - 1) return;
    const newTasks = [...tasks];
    const temp = newTasks[index];
    newTasks[index] = newTasks[index + 1];
    newTasks[index + 1] = temp;
    setTasks(newTasks);
  };

  return (
    <div>
      <form className="handleForm">
        {/*-------------------------HANDLE TASKS---------------------------------*/}
        <div className="add">
          <input
            type="text"
            className="addTaskInput"
            placeholder="Add new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          ></input>
          <button className="addButton" onClick={(e) => handleAddTask(e)}>
            Add
          </button>
        </div>
        {/*----------------------------------------------------------*/}
        <div className="search">
          <input
            type="text"
            className="searchBar"
            placeholder="Search for task"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>

        {/*-------------------------RENDER TASKS---------------------------------*/}
        <div className="tasks">
          <TodoRender
            tasks={tasks}
            search={search}
            handleDeleteTask={handleDeleteTask}
            moveTaskUp={moveTaskUp}
            moveTaskDown={moveTaskDown}
          />
        </div>
        {/*----------------------------------------------------------*/}
      </form>
    </div>
  );
}

export default TodoHandleForm;
