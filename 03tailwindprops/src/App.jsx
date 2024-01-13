import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'Rahul',
    age: 21
  }
  let newArr = [1,2,3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl mb-4'>Tailwind Test</h1>
       {/* <Card channel="Rahul or code" someobje={newArr}/> 
       <Card channel="Rahul or code" someobje={myObj}/>   */}
      <Card username="rahulaurcode" btnText="Click me"/>
      <Card username="shyam" btnText="Visit me"/>
    </>
  )
}

export default App
