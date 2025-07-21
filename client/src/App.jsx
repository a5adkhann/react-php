import React from 'react'
import BG from './components/BG'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Read from './components/Read'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Create from './components/Create'

const App = () => {
  return (
    <>
        <BG/>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Read/>}></Route>
                <Route path="/create" element={<Create/>}></Route>
            </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
