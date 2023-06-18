import React, { useEffect, useState } from 'react';
import './App.css';
const { DateTime } = require("luxon");

function App() {

  const [currentTime, setCurrentTime] = useState("");
  

  useEffect(() => {  
    const dt = DateTime.local();  
    const currentDate = dt.toLocaleString(DateTime.DATETIME_HUGE);
    setCurrentTime(currentDate);

  }, []);
 

  return (
    <div className="App">
      <header className="App-header">
        <h2>What Time is it?</h2>
        <p>{currentTime}</p>
      </header>
    </div>
  );
}

export default App;
