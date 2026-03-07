# Task killer

Task killer to aplikacja do zarządzania zadaniami (TODO List) napisana w React + Vite. Umożliwia dodawanie, edycję, usuwanie i oznaczanie zadań jako wykonane, a stan listy jest zarządzany przez Zustand.

## Demo

- GitHub Pages: [https://brzozanet.github.io/task-killer/](https://brzozanet.github.io/task-killer/)

## Funkcjonalności

- Dodawanie nowych zadań
- Edycja istniejących zadań
- Usuwanie zadań z potwierdzeniem
- Oznaczanie zadania jako zrobione (z potwierdzeniem)
- Walidacja formularza: blokada pustych i duplikujących się zadań
- Powiadomienia o akcjach (Notiflix)
- Licznik zadań widoczny w nagłówku

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
task-killer/
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
git clone https://github.com/brzozanet/task-killer.git
cd task-killer
npm install
npm run dev
```

Aplikacja developerska będzie dostępna pod adresem `http://localhost:5173/task-killer/`.

## Skrypty npm

- `npm run dev` - uruchamia Vite w trybie developerskim
- `npm run build` - buduje aplikację do katalogu `dist`
- `npm run preview` - lokalny podgląd buildu produkcyjnego
- `npm run lint` - uruchamia ESLint
- `npm run deploy` - build + publikacja `dist` na GitHub Pages

## Uwagi

- Aplikacja startuje z przykładową listą zadań zdefiniowaną w `src/store/store.js`.
- Dane są trzymane w pamięci aplikacji (brak zapisu do localStorage lub backendu), więc po odświeżeniu strony wracają dane początkowe.

![Screenshot App](https://raw.githubusercontent.com/brzozanet/task-killer/refs/heads/main/src/images/gh-cover-task-killer.jpg)
