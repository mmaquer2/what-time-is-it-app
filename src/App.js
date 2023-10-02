import React, { useEffect, useState } from 'react';
import './App.css';
const { DateTime } = require("luxon");

function App() {

  const [currentTime, setCurrentTime] = useState("");
  
  useEffect(() => {
    // Function to update the time
    const updateTime = () => {
      const dt = DateTime.local();
      const currentDate = dt.toLocaleString(DateTime.DATETIME_HUGE);
      setCurrentTime(currentDate);
    };

    // Initially, call updateTime to set the time
    updateTime();

    // Set up an interval to update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);
 

  return (
    <div className="App">
      <header className="App-header">
        <h2 data-testid="time-label">What Time Is It?</h2>
        <p data-testid="time-text-display" > it is {currentTime}</p>
      </header>
    </div>
  );
}

export default App;
