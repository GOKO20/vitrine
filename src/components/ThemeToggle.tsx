import React, { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Sauvegarder le choix dans localStorage
  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <>
        <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
    </>
    
  );
}
