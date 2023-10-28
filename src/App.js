import React, { useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import FrontPage from './frontpage.js';
import front from './front.css';
import Trade from './trade.js';

function App() {
  const [completedSets, setCompletedSets] = useState(0);

  const handleCorrectChoice = () => {
    setCompletedSets(completedSets + 1);
  };

  return (
    <>
      <Trade onCorrectChoice={handleCorrectChoice} completedSets={completedSets} />
    </>
  );
}

export default App;