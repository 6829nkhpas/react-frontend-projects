import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
const addValue = () =>{
  setCount(count+1)
}
const removeValue = () =>{
  setCount(count-1)
}
  return (
    <>
      <h1> Current value {count} </h1>
      <h1>Prev Value {count -1 }</h1>
      <button onClick={addValue}>Add Value</button>{ " "}
      <button onClick={removeValue}>Remove Value Value</button>
   
    </>
  )
}

export default App
