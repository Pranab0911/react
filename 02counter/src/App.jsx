import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [counter,setcounter] = useState(0)

const addvalue =()=>{
  if(counter<20)
      {
        setcounter(counter+1)
      }
}
const remove =()=>{
  if(counter>0){
      setcounter(counter-1)
  }
}

  return (
    <>
     <h1>Pranab coed</h1>
     <h1>counter {counter}</h1>

     <button
     onClick={addvalue}
     >add value </button>
     <br />
     <button onClick={remove} >remove value</button>
    </>
  )
}

export default App
