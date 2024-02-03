import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //Hooks
  let [counter, setCounter] = useState(15);
  //let counter = 15;
  
  const addValue = () =>{
    // counter = counter + 1;
    // setCounter(counter);
    //setCounter(counter + 1);
    // console.log("Clicked",counter);

    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)


    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }
 const removeValue = () => {
   setCounter(counter - 1);
   console.log("Clicked", counter);
 }
  return (
    <>
    <h1>Rahul aur React</h1>
    <h2>counter value: {counter}</h2>

    <button onClick={addValue}>Add Value{counter}</button>
    <br/><br/>
    <button onClick={removeValue}>Remove value{counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
