import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("gg-theme") || "dark");

  useEffect(() => {
    const body = document.body;
    if (theme === "light") {
      body.classList.add("light-theme");
      localStorage.setItem("gg-theme", "light");
    } else {
      body.classList.remove("light-theme");
      localStorage.setItem("gg-theme", "dark");
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="ml-3 p-2 rounded border"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "☀️" : "🌙"}
    </button>
  );
}
