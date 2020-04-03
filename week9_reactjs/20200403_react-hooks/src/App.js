import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Carousel from './components/Carousel';
import TodoList from  './components/TodoList';

function App() {
  return (
    <div className="App">
      <Counter />
      <Carousel />
      <TodoList />
    </div>
  );
}

export default App;
