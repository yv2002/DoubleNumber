import { useMemo, useState } from 'react';
import './App.css';
function App() {
  
  const[input,setInput]=useState(0);
 function expensiveTask(num){
  console.log("Inside expensive task");
  for(let i=0;i<=1000000;i++){}
  return num*2;
  
 }
 let doubleValue=useMemo(()=>expensiveTask(input),[input]);
  return (
    <div>
      <h1>Double The Value</h1>
    
     <input type='number'
     placeholder='enter number' 
     value={input} 
     onChange={(e)=>setInput(e.target.value)}
     />
    <div>
      Double:{doubleValue}
    </div>
    </div>
  )
}

export default App
