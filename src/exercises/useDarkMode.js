import { useState, useEffect } from "react";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is already enabled in local storage
    const storedDarkMode = window.localStorage.getItem("darkMode");
    if (storedDarkMode) {
      setIsDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    // Update dark mode preference in local storage
    window.localStorage.setItem("darkMode", JSON.stringify(newDarkModeState));
  };

  return [isDarkMode, toggleDarkMode];
}
