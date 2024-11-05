import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react"

function App() {
 
const [length,setlength] = useState(8);
const [numberallowed,setnumberallowed] = useState(false);
const [charallowed,setcharallowed] = useState(false);
const [password,setpassword] = useState("");
const passwordref = useRef(null);

const passwordgenerator = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numberallowed) str+= "0123456789"
  if(charallowed) str+="!@#$%^&*(){}[]~"
  for(let i=1;i<=length;i++){
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char)
  }
  setpassword(pass)
} , [length,numberallowed,charallowed])

const copypasswordtoclipboard = useCallback(()=>{
  passwordref.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])
useEffect(() => {
  passwordgenerator()
},[length,numberallowed,charallowed ])

  return (
    <>
       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
          <h1 className="text-white text-center my-3">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
              <input type="text" ref={passwordref} value={password} className="outline-none w-full py-1 px-3" placeholder="password" readOnly />
              <button onClick={copypasswordtoclipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
          </div>
            <div className="flex text-sm gap-x-2">
              <div className="flex items-center gap-x-1">
                  <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e) => {
                    setlength(e.target.value)
                  }}/><label>Length: {length}</label>
              </div>
              <div className="flex items-center gap-x-1">
                  <input type="checkbox" defaultChecked={numberallowed} id="numberinput" onChange={()=>{
                    setnumberallowed((prev)=> !prev)
                  }}></input><label>Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                  <input type="checkbox"  defaultChecked={charallowed} id="charinput" onChange={()=>{
                    setcharallowed((prev)=> !prev)}}></input> <label>Special characters</label>
              </div>
            </div>
       </div>
    </>
  )
}

export default App
