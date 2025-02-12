import { RoughNotation } from "react-rough-notation";
import { FaTrash } from "react-icons/fa";

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-sm">
      <div className="flex items-center">
        {/* Checkbox to toggle completion */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="mr-3 w-5 h-5 cursor-pointer accent-slate-900"
        />

        {/* Rough Notation effect on task text */}
        <RoughNotation type="highlight" show={task.completed} color="#64748b">
          <span className={`text-lg ${task.completed ? "line-through" : ""}`}>
            {task.text}
          </span>
        </RoughNotation>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => deleteTask(task.id)}
        className="text-slate-900 hover:text-slate-950 transition"
      >
        <FaTrash size={18} />
      </button>
    </div>
  );
};

export default TaskItem;
