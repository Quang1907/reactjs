import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (!newTask) return alert("vui long de trong");
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };

    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
    setNewTask("");
  };

  const handleDeleteTask = (id) => {
    const newTodoList = todoList.filter((task) => task.id !== id);
    setTodoList(newTodoList);
  };

  const handleCompletedTask = (id) => {
    console.log(id);
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        }
        return task;
      })
    );
  };
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleNewTask} value={newTask} />
        <button onClick={handleAddTask}>Add task</button>
      </div>
      <div className="list">
        {todoList.map((task, key) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              taskName={task.taskName}
              handleDeleteTask={handleDeleteTask}
              handleCompletedTask={handleCompletedTask}
              completed={task.completed}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
