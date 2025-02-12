import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        placeholder="Add a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border border-gray-300 px-3 py-2 rounded-md flex-1"
      />
      <button
        type="submit"
        className="bg-slate-900 text-white px-4 py-2 rounded-md shadow-md hover:bg-slate-950"
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;
