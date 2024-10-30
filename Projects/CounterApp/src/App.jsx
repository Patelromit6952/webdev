import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , setcounter] = useState(0);
  const addvalue = () => {
    if(counter<20)
      setcounter(counter+1);
  }
  const removevalue = () => {
    if(counter>0)
      setcounter(counter-1);
  }

  return (
    <>
      <div>
        <h1>Counter App</h1>
        <h2>Counter Value  : {counter}</h2>
        <button onClick={addvalue}>Increment</button>&nbsp;
        <button onClick={removevalue}>Decrement</button>
       </div>
    </>
  )
}

export default App
