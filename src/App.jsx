import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Shop from './Component/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Shop></Shop>
    </>
  )
}

export default App
