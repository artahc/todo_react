import { useState } from "react";

interface BasicTodo {
  readonly id: number;
  readonly title: string;
  readonly isCompleted: boolean;
}

function TheMostBasicTodoApp() {
  const [todos, setTodos] = useState<BasicTodo[]>([
    {
      id: 0,
      title: "Default Todo",
      isCompleted: false,
    },
  ]);

  const [newTodoTitle, setNewTodoTitle] = useState("");

  const addTodo = (title: string) => {
    if (title === "" || title === undefined) return;

    const newTodo = {
      id: Math.random() * 1000,
      title: title,
      isCompleted: false,
    } as BasicTodo;
    setTodos([...todos, newTodo]);
    setNewTodoTitle("");
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  const updateTodoStatus = (id: number, status: boolean) => {
    const updatedTodos = todos.map((e) => {
      if (e.id !== id) return e;
      return { ...e, isCompleted: status };
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>The Most Basic ToDo App</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={(event) => {
                updateTodoStatus(todo.id, event.target.checked);
              }}
            ></input>
            <span
              style={{
                textDecoration: todo.isCompleted ? "line-through" : undefined,
                margin: 10,
              }}
            >
              {todo.title}
            </span>
            <button
              onClick={() => {
                removeTodo(todo.id);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={newTodoTitle}
          onChange={(event) => {
            setNewTodoTitle(event.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            addTodo(newTodoTitle);
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default TheMostBasicTodoApp;
