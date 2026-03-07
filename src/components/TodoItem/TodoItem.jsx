import Notiflix from "notiflix";
import PropTypes from "prop-types";
import useStore from "../../store/store";
import css from "./TodoItem.module.css";
import { useState } from "react";

export const TodoItem = ({ id, task, isDone, isEdited }) => {
  const [newTask, setNewTask] = useState(task);
  const { deleteTodo, markAsDone, toggleTaskEdit, editTodo } = useStore();

  const handleTaskDeleteClick = () => {
    Notiflix.Confirm.show(
      "Konieczne potwierdzenie",
      "Czy na pewno chcesz usunąć to zadanie?",
      "Tak",
      "Nie",
      function yes() {
        deleteTodo(id);
        Notiflix.Notify.success("Zadanie zostało usunięte");
      },
      function no() {
        return;
      },
      {
        width: "400px",
        borderRadius: "8px",
      },
    );
  };

  const handleMarkAsDoneClick = () => {
    Notiflix.Confirm.show(
      "Konieczne potwierdzenie",
      "Czy na pewno oznaczyć to zadanie jako zrobione?",
      "Tak",
      "Nie",
      function yes() {
        markAsDone(id);
        Notiflix.Notify.success("Zadanie zostało oznaczone jako zrobione");
      },
      function no() {
        return;
      },
      {
        width: "400px",
        borderRadius: "8px",
      },
    );
  };

  return (
    <>
      {isEdited ? (
        <div className={css.taskContainer}>
          <input
            className={css.input}
            type="text"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
          <div className={css.actions}>
            <button
              className={`${css.button} ${css.buttonDone}`}
              onClick={() => editTodo(id, newTask)}
            >
              Potwiedź
            </button>
            <button
              className={`${css.button} ${css.buttonCancel}`}
              onClick={() => toggleTaskEdit(id)}
            >
              Anuluj
            </button>
          </div>
        </div>
      ) : (
        <div className={css.taskContainer}>
          <p className={isDone ? css.taskDone : css.task}>{task}</p>
          <div className={css.actions}>
            {!isDone && (
              <button
                className={`${css.button} ${css.buttonDone}`}
                onClick={handleMarkAsDoneClick}
              >
                Zrobione
              </button>
            )}
            <button
              className={`${css.button} ${css.buttonEdit}`}
              onClick={() => toggleTaskEdit(id)}
            >
              Edytuj
            </button>
            <button
              className={`${css.button} ${css.buttonDelete}`}
              onClick={handleTaskDeleteClick}
            >
              Usuń
            </button>
          </div>
        </div>
      )}
    </>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  isEdited: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired,
};
