import { useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm/AddTaskForm";
import { TodoList } from "./components/TodoList/TodoList";
import useStore from "./store/store";
import css from "./App.module.css";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { todos } = useStore();

  const handleIsFormVisibleClick = () => {
    setIsFormVisible((prevState) => !prevState);
  };

  let numberOfTodosText;
  if (todos.length === 0) {
    numberOfTodosText = "zadań";
  } else if (todos.length === 1) {
    numberOfTodosText = "zadanie";
  } else if (todos.length < 5) {
    numberOfTodosText = "zadania";
  } else {
    numberOfTodosText = "zadań";
  }

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Task Killer – No Task Left Alive 😎</h1>
        <h2 className={css.subtitle}>
          {todos.length} {numberOfTodosText}
        </h2>
        {isFormVisible ? (
          <AddTaskForm todos={todos} />
        ) : (
          <button className={css.button} onClick={handleIsFormVisibleClick}>
            Dodaj zadanie
          </button>
        )}
        <TodoList todos={todos} />
      </div>
      <div className={css.footer}>
        Made with ❤️ by{" "}
        <a
          className={css.footerLink}
          href="https://brzoza.net"
          target="_blank"
          rel="noreferrer"
        >
          brzoza.net
        </a>
      </div>
    </>
  );
}

export default App;
