/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const App = () => {
  let [counter, setCounter] = useState(0);
  const update = () => {
    setCounter(counter+5);
  }

  const decrease = () => {
    setCounter(counter-1);
  }
  return (
    <div>
      <h1>หมูปิ้งริมทาง</h1>
      <p>{counter*5}</p>
      <p>{counter*10}</p>
      <p>{counter*20}</p>
      <p>{counter*30}</p>
      <button onClick={update}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  )
}

export default App