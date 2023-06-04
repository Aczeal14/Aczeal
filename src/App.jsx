import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Project from './components/Project'
import About from './components/About'
import Home from './components/Home'

function App() {


  return (
    <>
      <Navbar/>

      <Home/>

      <About/>

      <Project/>

      <Contact/>
    </>
  )
}

export default App
