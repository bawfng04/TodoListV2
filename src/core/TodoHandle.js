import React, { useState, useEffect } from "react";
import TodoRender from "./TodoRender";
import "./Todo.css";

function TodoHandleForm() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(() => {
    const savedChecked = localStorage.getItem("checked");
    return savedChecked ? JSON.parse(savedChecked) : [];
  });
  const [checkFilter, setCheckFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("checked", JSON.stringify(checked));
  }, [tasks, checked]);

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

  const handleChecked = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
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
    <div className="bigDiv">
      <form className="handleForm">
        {/*-------------------------HANDLE TASKS---------------------------------*/}
        <div className="add">
          <label className="addTaskLabel">Add Task</label>
          <br />
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
          <label className="searchLabel">Search</label>
          <br />
          <input
            type="text"
            className="searchBar"
            placeholder="Search for task"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <select
            className="checkFilter"
            value={checkFilter}
            onChange={(e) => setCheckFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Checked">Checked</option>
            <option value="Unchecked">Unchecked</option>
          </select>
        </div>
      </form>
      {/*-------------------------RENDER TASKS---------------------------------*/}
      <div className="tasks">
        <TodoRender
          checked={checked}
          handleChecked={handleChecked}
          checkFilter={checkFilter}
          tasks={tasks}
          search={search}
          handleDeleteTask={handleDeleteTask}
          moveTaskUp={moveTaskUp}
          moveTaskDown={moveTaskDown}
        />
      </div>
    </div>
  );
}

export default TodoHandleForm;
