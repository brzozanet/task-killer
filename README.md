# React TODO List

Aplikacja do zarzadzania zadaniami (TODO List) napisana w React + Vite. Umozliwia dodawanie, edycje, usuwanie i oznaczanie zadan jako wykonane, a stan listy jest zarzadzany przez Zustand.

## Demo

- GitHub Pages: [https://brzozanet.github.io/react-todo-list/](https://brzozanet.github.io/react-todo-list/)

## Funkcjonalnosci

- Dodawanie nowych zadan
- Edycja istniejacych zadan
- Usuwanie zadan z potwierdzeniem
- Oznaczanie zadania jako zrobione (z potwierdzeniem)
- Walidacja formularza: blokada pustych i duplikujacych sie zadan
- Powiadomienia o akcjach (Notiflix)
- Licznik zadan widoczny w naglowku

## Technologie

- React `19.2.4`
- React DOM `19.2.4`
- Vite `7.3.1`
- Zustand `5.0.11`
- Notiflix `3.2.8`
- Nanoid `5.1.6`
- PropTypes `15.8.1`
- modern-normalize `3.0.1`
- CSS Modules

## Struktura projektu

```text
react-todo-list/
|- public/
|- src/
|  |- components/
|  |  |- AddTaskForm/
|  |  |- Button/
|  |  |- TodoItem/
|  |  |- TodoList/
|  |- images/
|  |- store/
|  |  |- store.js
|  |- App.jsx
|  |- App.module.css
|  |- index.css
|  |- main.jsx
|- eslint.config.js
|- index.html
|- package.json
|- vite.config.js
`- README.md
```

## Wymagania

- Node.js `20.19+` lub `22.12+`
- npm

## Instalacja i uruchomienie

```bash
git clone https://github.com/brzozanet/react-todo-list.git
cd react-todo-list
npm install
npm run dev
```

Aplikacja developerska bedzie dostepna pod adresem `http://localhost:5173`.

## Skrypty npm

- `npm run dev` - uruchamia Vite w trybie developerskim
- `npm run build` - buduje aplikacje do katalogu `dist`
- `npm run preview` - lokalny podglad buildu produkcyjnego
- `npm run lint` - uruchamia ESLint
- `npm run deploy` - build + publikacja `dist` na GitHub Pages

## Uwagi

- Aplikacja startuje z przykladowa lista zadan zdefiniowana w `src/store/store.js`.
- Dane sa trzymane w pamieci aplikacji (brak zapisu do localStorage lub backendu), wiec po odswiezeniu strony wracaja dane poczatkowe.

![Screenshot App](https://raw.githubusercontent.com/brzozanet/react-todo-list/refs/heads/main/src/images/gh-cover-react-todo-list.jpg)
