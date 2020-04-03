import React, { useState } from 'react';

function Counter() {
  const INITIAL_STATE = 0 
  const [count, setCount] = useState(INITIAL_STATE);

  // function increaseCounter() {
  //   setCount( (prevState) => prevState + 1 )
  // }

  // function decreaseCounter() {
  //   setCount( (prevState) => prevState - 1 )
  // }

  // function resetCounter() {
  //   setCount( count = INITIAL_STATE )
  // }

  return(
    <div>
      
  <p>count: {count}</p>
      <button onClick={ () => setCount((count) => count + 1) }>+</button>
      <button onClick={ () => setCount((count) => count - 1) }>-</button>
      <button onClick={ () => setCount(() => INITIAL_STATE) }>Reset</button>
    </div>
  )
}

export default Counter;
