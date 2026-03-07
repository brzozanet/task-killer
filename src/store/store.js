import { nanoid } from "nanoid";
import { create } from "zustand";

const todosDatabase = [
  {
    id: nanoid(),
    task: "Skończyć kurs React i domknąć wszystkie moduły dotyczące komponentów, stanu oraz hooków. Na koniec przygotować mały projekt podsumowujący.",
    isEdited: false,
    isDone: false,
  },
  {
    id: nanoid(),
    task: "Dopieścić projekt Kapu$ta pod kątem UX i spójności wizualnej, szczególnie w formularzach oraz przyciskach akcji. Dodać brakujące poprawki responsywności.",
    isEdited: false,
    isDone: false,
  },
  {
    id: nanoid(),
    task: "Zaktualizować CV o najnowsze projekty, technologie i konkretne osiągnięcia wraz z mierzalnym efektem pracy. Przygotować też krótszą wersję pod oferty juniorskie.",
    isEdited: false,
    isDone: false,
  },
  {
    id: nanoid(),
    task: "Zrobić nowe portfolio website z naciskiem na czytelną prezentację projektów, procesu i użytych technologii. Dodać sekcję o mnie oraz formularz kontaktowy.",
    isEdited: false,
    isDone: false,
  },
];

const useStore = create((set) => ({
  todos: todosDatabase,
  appTitle: "Do zrobienia",

  addTodo: (newTask) =>
    set((state) => ({
      todos: [
        {
          id: nanoid(),
          task: newTask,
          isDone: false,
          isEdited: false,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        ...state.todos,
      ],
    })),

  deleteTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId),
    })),

  toggleTaskEdit: (todoId) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoId
          ? { ...todo, isEdited: !todo.isEdited }
          : { ...todo, isEdited: false },
      ),
    })),

  editTodo: (todoId, editedTask) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              task: editedTask,
              updatedAt: Date.now(),
              isEdited: false,
            }
          : todo,
      ),
    })),

  markAsDone: (todoId) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoId
          ? { ...todo, isDone: true, updatedAt: Date.now() }
          : todo,
      ),
    })),
}));

export default useStore;
