import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from '../src/Data.json'
import CartMemes from './components/CardMemes/CardMemes.jsx'
import CardContainer from './components/CardContainer/CardContainer.jsx'

function App() {
  const arrayMemes = Data;
  

  return (
    <>
    <CardContainer />
    </>
  )
}

export default App
