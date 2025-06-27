import React, { useState, useEffect } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isRunning && interval !== null) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Stopwatch</h1>
      <h2>Time: {formatTime(seconds)}</h2>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setIsRunning(!isRunning)} style={{ marginRight: "10px", padding: "10px 20px" }}>
          {isRunning ? "Stop" : "Start"}
        </button>

        <button onClick={handleReset} style={{ padding: "10px 20px" }}>Reset</button>
      </div>
    </div>
  );
}
