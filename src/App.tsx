// import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="mx-auto max-w-sm ">
      <h1 className="my-10 text-4xl font-semibold text-center">Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
