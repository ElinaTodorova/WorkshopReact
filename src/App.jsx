import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from '../src/Data.json'
import CartMemes from './components/CardMemes/CardMemes.jsx'

function App() {
  const arrayMemes = Data;
  

  return (
    <>
     {arrayMemes.map((element) => 
      <CartMemes key={element.title} title={element.title} img={element.img}></CartMemes>
     )}
     
    </>
  )
}

export default App
