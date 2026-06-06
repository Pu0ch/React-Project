import { useState } from "react";

export default function Main1() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function add() {
    if (task.trim() === "") return;

    setTasks((prev) => [...prev, task]);
    setTask("");
  }

  function deleteTask(index) {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <>
      <h1 className="m-5 text-8xl text-gray-200 font-semibold flex justify-center items-center">
        todos
      </h1>

      <div className="flex justify-center">
        <input
          className="w-3xl h-12 border rounded-3xl text-2xl  pl-5"
          type="text"
          placeholder="Add To Do..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={add} className="bg-blue-400 p-2 rounded-2xl ml-2">
          Add
        </button>
      </div>

      <div className="flex flex-col items-center mt-5">
        {tasks.map((item, index) => (
          <div
            key={index}
            className="flex justify-between w-96 bg-gray-200 p-2 m-2 rounded"
          >
            <li>{item}</li>
            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}