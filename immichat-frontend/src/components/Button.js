import { useEffect } from "react"
import { useState } from "react";
import React from "react"
import "./App.css";

function Button2 () {
    
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const json = localStorage.getItem("site-dark-mode");
  const currentMode = JSON.parse(json);
  if (currentMode) {
    setDarkMode(true);
  } else {
    setDarkMode(false);
  }
}, []);

useEffect(() => {
  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  const json = JSON.stringify(darkMode);
  localStorage.setItem("site-dark-mode", json);
}, [darkMode]);

    return (
        <div>
            <h1> Header
            </h1>
        <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
      </div>
    )
}
export default Button2;