import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import DetailedExperience from './components/DetailedExperience'



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
          <Route path='/detailed-experience' element={<DetailedExperience />} />
        </Routes>

        <Footer />
      </BrowserRouter >

    </>
  )
}

export default App
