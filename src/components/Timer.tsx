import { useState, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const { theme, toggleTheme } = useTheme();

  const start = () => {
    if (intervalRef.current) return;
    intervalRef.current = window.setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div>
      <p>{seconds}s</p>
      <p>{theme}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
