import { getTodos } from "../services/todo.services";
import type { ITodo } from "./Todo.types";
import { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>();

  const fetchTodo = async () => {
    const allTodos = await getTodos();
    setTodos(allTodos);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className="max-w-screen mx-auto p-4 ">
      {todos?.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            title={todo.title}
            description={todo.description}
            isCompleted={todo.isCompleted}
          />
        );
      })}
    </div>
  );
};
