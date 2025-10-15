import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    },[darkMode]);

  return (
    <button
    onClick={() => setDarkMode(!darkMode)}
    className="fixed top-4 right-4 p-3 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition z-60"
    aria-label="Toggle dark mode"
    >
        {darkMode? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}

export default ThemeToggle