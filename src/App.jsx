import React from 'react'
import '@fontsource/outfit';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Portfilio from './Components/Portfilio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Portfilio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
