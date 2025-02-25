import React from "react";

interface TaskProps {
  id: string;
  description: string;
  isDone: boolean;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, newDescription: string) => void;
}

const Task: React.FC<TaskProps> = ({ id, description, isDone, toggleTask, deleteTask, editTask }) => {
  return (
    <div className="flex justify-between items-center border p-2 rounded my-2">
      <input type="checkbox" checked={isDone} onChange={() => toggleTask(id)} />
      <span className={isDone ? "line-through text-gray-400" : ""}>{description}</span>
      <button onClick={() => deleteTask(id)} className="text-red-500">Delete</button>
      <button onClick={() => editTask(id, prompt("Edit Task:", description) || description)}>Edit</button>
    </div>
  );
};

export default Task;
