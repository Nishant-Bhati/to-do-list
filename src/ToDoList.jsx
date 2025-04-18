import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewtask] = useState("");

  function handleInputCange(event) {
    setNewtask(event.target.value);
  }
  function addTask() {
    if(newtask.trim() !== ""){
      setTasks((tasks) => [...tasks, newtask]);
      setNewtask("");
    }
  }
  function deleteTask(index) {
    const updatedtask = tasks.filter((element , i) => i !== index);
    setTasks(updatedtask);

  }
  function moveTaskUp(index) {
    if(index > 0){
      const updatedtask = [...tasks];
      [updatedtask[index], updatedtask[index - 1]] = [
        updatedtask[index - 1],
        updatedtask[index]
      ];
      setTasks(updatedtask);
    }
  }

  function moveTaskDown(index) {
    if(index < tasks.length-1){
      const updatedtask = [...tasks];
      [updatedtask[index], updatedtask[index + 1]] = [
        updatedtask[index + 1],
        updatedtask[index]
      ];
      setTasks(updatedtask);
  }
}

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task.."
          value={newtask}
          onChange={handleInputCange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((tasks, index) => (
          <li key={index}>
            <span className="text">{tasks}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ⬆️
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              ⬇️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
