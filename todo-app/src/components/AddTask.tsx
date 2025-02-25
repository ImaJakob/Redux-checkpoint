/* eslint disabled*/
import React from "react";

import { useState } from "react";

interface AddTaskProps {
  addTask: (description: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
        Add
      </button>
    </form>
  );
};

export default AddTask;
