import { useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState(false)
  
  const handleToggle = () => {
    setActive(!active)
  }
  
  return (
    <header className="w-full  bg-transparent
    backdrop-blur-2xl h-12 mb-12 z-10">
    <div className="flex justify-between px-7 sm:px-12 py-4 mx-auto">
      <div className="logo">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-400">Sci<span
        className="text-secondary tracking-wide">Quest</span></h2>
      </div>
      
      <div className={`hamburger sm:hidden font-bold     ${active ? 'open' : '' }`} onClick={handleToggle}>
        <div className="hamburger-top"></div>
        <div className="hamburger-middle"></div>
        <div className="hamburger-bottom"></div>
      </div>
      
      <nav className="hidden sm:block space-x-8 text-xl text-gray-400">
        <a className="hover:text-secondary" href="#"> About</a>
        <a className="hover:text-secondary" href="#"> Discover</a>
        <a className="hover:text-secondary" href="#"> Get started</a>
      </nav>
    </div>
   <hr className="bg-gray-200 w-full sm:mx-auto sm:w-[90%]" />
    
    <section className={`w-full bg-[rgba(73,73,73,0.5)] backdrop-blur-3xl h-[15rem] flex flex-col space-y-6 justify-center
    text-2xl items-center text-white font-bold menu z-10 
    ${active ? 'toggle' : '' }`} onClick={handleToggle}>
      <a className="hover:text-white w-full p-4 hover:bg-secondary text-center" href="#about" >About</a>
      <a className="hover:text-white w-full p-4 hover:bg-secondary text-center"
      href="#about" >Discover</a>
      <a className="hover:text-white w-full p-4 hover:bg-secondary text-center"
      href="#about" >Get started</a>
    </section>
    
    </header>
  )
}

export default Navbar