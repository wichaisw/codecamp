import React, { useState, useEffect } from 'react';
import axios from './config/axios';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)

  const fetchData = async() => {
    const result = await axios.get('/counter')
    setCounter(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onClickSetCounter = async (counter) => {
    const body = {
      counter,
    };
    await axios.put('/counter', body);
    fetchData();
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => onClickSetCounter(Number(counter) + 1)}>up</button>
      <button onClick={() => onClickSetCounter(Number(counter) - 1)}>down</button>
      <button onClick={() => onClickSetCounter(0)}>reset</button>
    </div>
  );
}

export default App;
