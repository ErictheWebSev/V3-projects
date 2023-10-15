import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Discover from './Components/Discover'
import Contact from './Components/Contact'

 const App = () => {

  return (
    <div className="w-full h-screen bg-gray-50">
      <Navbar />
      <div class="max-w-[60rem] mx-auto">
        <Hero />
        <About />
        <Discover />
        <Contact />
      </div>
    </div>
  )
}

export default App
