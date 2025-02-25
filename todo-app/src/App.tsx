import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

const App = () => {
  const [tasks, setTasks] = useState<{ id: string; description: string; isDone: boolean }[]>([]);
  const [filter, setFilter] = useState("all");

  const addTask = (description: string) => {
    setTasks([...tasks, { id: uuidv4(), description, isDone: false }]);
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, isDone: !task.isDone } : task)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id: string, newDescription: string) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, description: newDescription } : task)));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">To-Do App</h1>
      <AddTask addTask={addTask} />

      <div className="mt-4">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("done")}>Done</button>
        <button onClick={() => setFilter("not-done")}>Not Done</button>
      </div>

      <ListTask tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} filter={filter} />
    </div>
  );
};

export default App;
