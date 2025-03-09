import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Home from './components/Home'
import Aboutme from './components/Aboutme'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {
  // document.addEventListener('contextmenu', function (event) {
  //   event.preventDefault();
  // });
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about-me' element={<Aboutme />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>

        <Footer />
      </BrowserRouter >

    </>
  )
}

export default App
