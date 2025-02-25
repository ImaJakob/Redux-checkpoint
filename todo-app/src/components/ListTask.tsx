import React from "react";
import Task from "./Task";

interface ListTaskProps {
  tasks: { id: string; description: string; isDone: boolean }[];
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, newDescription: string) => void;
  filter: string;
}

const ListTask: React.FC<ListTaskProps> = ({ tasks, toggleTask, deleteTask, editTask, filter }) => {
  const filteredTasks = filter === "all" ? tasks : tasks.filter(task => task.isDone === (filter === "done"));

  return (
    <div>
      {filteredTasks.map(task => (
        <Task key={task.id} {...task} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
      ))}
    </div>
  );
};

export default ListTask;
