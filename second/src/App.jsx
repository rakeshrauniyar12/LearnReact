import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let [length,setLength]=useState(5);
  let [char,setChar]=useState(false);
  let [number,setNumber]=useState(false);
  let [password,setPassword]=useState("");
  const passwordGenerator=useCallback(()=>{
    let pass="";
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) string+="0123456789";
    if(char) string+="{@#$!%^&*(]";
    for(let r=1;r<=length;r++){
      let char=Math.floor(Math.random()*string.length+1);
      pass+=string.charAt(char);
    }
    setPassword(pass);
  },[length,char,number,setPassword])
  useEffect(()=>passwordGenerator(),[length,char,number,setPassword])
 let passwordRef=useRef(null);
   let passwordCopyToClipboard=()=>{
       passwordRef.current?.select();
       passwordRef.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(password);
   }
  return (
    <>
      <div style={{background:"red",borderRadius:"10px"}}>
    <h1 style={{color:"white"}}>Password Generator</h1>
    <div>
      <input type="text" 
      value={password}
      placeholder='password'
      readOnly
      ref={passwordRef}
      />
      <button onClick={passwordCopyToClipboard}>Copy</button>

    </div>
    <div>
      <input type="range" min={5} max={30} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
      <label>length:{length}</label>
      <input type="checkbox" defaultChecked={number} onChange={()=>setNumber((prev)=>!prev)}/>
      <label>Number Allowed</label>
      <input type="checkbox" defaultChecked={number} onChange={()=>setChar((prev)=>!prev)}/>
      <label>Character Allowed</label>
    </div>
        
      </div>
    </>
     
  )
}

export default App
