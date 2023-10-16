import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Discover from './Components/Discover'

 const App = () => {

  return (
    <div className="w-full h-screen bg-gray-50">
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Hero />} />
          <Route path='about' element={<About />} />
          <Route path='discover' element={<Discover />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
