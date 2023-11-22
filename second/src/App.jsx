import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter,setCounter]=useState(2);
  let addValue=()=>{
    if(counter>=20){
      alert("Value is more than or equal to 20");
    } else{
      setCounter(counter+1);
    }
   
  }
  let subtractValue=()=>{
    if(counter<=0){
      alert("Value is less than or equal to 0");
    } else{
      setCounter(counter-1);
    }
  }
  return (
    <>
     <h1>Chai aur react</h1>
     <h1>Counter:{counter}</h1>
     <button onClick={addValue}>Add Value</button>
     <button onClick={subtractValue}>Subtract Value</button>
    
    </>
     
  )
}

export default App
