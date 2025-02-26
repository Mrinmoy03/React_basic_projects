import { useState } from "react";

interface TodoList {
  id: number;
  task: string;
  completed: boolean;
}

export const Todo = () => {
  const [todo, setTodo] = useState<TodoList[]>([]);
  const [task, setTask] = useState<string>("");

  const addTodo = () => {
    if (!task.trim()) return; // Prevent adding empty todos

    const newTodo: TodoList = {
      id: Date.now(), // Use timestamp as unique ID
      task,
      completed: false,
    };

    setTodo((prevTodo) => [...prevTodo, newTodo]);
    setTask(""); // Clear input field
  };

  const deleteTodo = (id: number) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1>TODO LIST</h1>

      {/* Input field for adding new todos */}
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Add TODO</button>

      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            {item.task} {item.completed ? "(Completed)" : ""}
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
