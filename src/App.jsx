import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './Child1'
import { useMainContext } from './mainContext'

function App() {
  const { state } = useMainContext();

  console.log("App refresh", state)

  return (
    <>
     <Child1 />
    </>
  )
}

export default App
