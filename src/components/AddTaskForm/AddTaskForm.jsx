import { useState } from "react";
import Notiflix from "notiflix";
import PropTypes from "prop-types";
import useStore from "../../store/store";
import css from "./AddTaskForm.module.css";

export const AddTaskForm = ({ todos }) => {
  const { addTodo } = useStore();
  const [newTask, setNewTask] = useState("");
  const normalizedTask = newTask.trim().toLowerCase();
  const isDuplicate =
    normalizedTask.length > 0 &&
    todos.some(({ task }) => task.trim().toLowerCase() === normalizedTask);
  const isBlankAfterTyping = newTask.length > 0 && normalizedTask.length === 0;
  const isInvalid = isBlankAfterTyping || isDuplicate;

  const handleInputText = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTaskForm = (event) => {
    event.preventDefault();

    if (isBlankAfterTyping) {
      Notiflix.Notify.failure("Wpisz nazwę zadania");
    } else if (isDuplicate) {
      Notiflix.Notify.failure("Takie zadanie masz już na liście");
    } else {
      addTodo(newTask.trim());
      setNewTask("");
      Notiflix.Notify.success("Zadanie zostało dodane do listy");
    }
  };

  return (
    <>
      <form className={css.form} onSubmit={handleAddTaskForm}>
        <div className={css.inputWrapper}>
          <input
            className={`${css.input} ${isInvalid ? css.inputError : ""}`}
            type="text"
            name="task"
            value={newTask}
            onChange={handleInputText}
            placeholder="Wpisz nowe zadanie..."
            aria-invalid={isInvalid}
          />
          {isBlankAfterTyping && (
            <p className={css.validationMessage}>Pole nie moze byc puste.</p>
          )}
          {isDuplicate && (
            <p className={css.validationMessage}>Takie zadanie juz istnieje.</p>
          )}
        </div>
        <button
          className={css.button}
          type="submit"
          disabled={!newTask.trim() || isDuplicate}
        >
          Dodaj
        </button>
      </form>
    </>
  );
};

AddTaskForm.propTypes = {
  todos: PropTypes.array.isRequired,
};
