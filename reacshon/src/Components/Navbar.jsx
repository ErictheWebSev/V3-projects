import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState(false)
  
  const handleToggle = () => {
    setActive(!active)
  }
  
  return (
    <>
    <header className="w-full  bg-transparent
    backdrop-blur-2xl h-16 mb-20 z-10 fixed top-0">
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
        <Link className="hover:text-secondary" to="/"> Home</Link>
        <Link className="hover:text-secondary" to="/about"> About</Link>
        <Link className="hover:text-secondary" to="/discover"> Discover</Link>
        <a className="hover:text-secondary" href="#"> Get started</a>
      </nav>
    </div>
  {/* <hr className="bg-gray-200 w-full sm:mx-auto sm:w-[90%]" /> */}
    
    <section className={`w-full bg-[rgba(73,73,73,0.5)] fixed  backdrop-blur-3xl
    h-[20.6rem] flex flex-col space-y-6 justify-center
    text-2xl items-center text-white font-bold menu z-10 
    ${active ? 'toggle' : '' }`} onClick={handleToggle}>
      <Link className="hover:text-white w-full p-4 hover:bg-secondary
      text-center" to="/" >Home</Link>
      <Link className="hover:text-white w-full p-4 hover:bg-secondary
      text-center" to="/about" >About</Link>
      <Link className="hover:text-white w-full p-4 hover:bg-secondary text-center"
      to="/discover" >Discover</Link>
      <a className="hover:text-white w-full p-4 hover:bg-secondary text-center"
      href="#about" >Get started</a>
    </section>
    </header>
    
    <div className="max-w-[60rem] mx-auto">
      <Outlet />
    </div>
    
   <footer className="mt-28 w-full h-auto sm:px-12 px-4 py-7 bg-gray-900 text-white flex
      sm:justify-between flex-col sm:flex-row items-center space-y-8
      justify-center relative bottom-0">
      <div className="sm:w-32 h-full w-full text-center space-y-3">
          <h1 className="text-5xl font-medium text-secondary tracking-wider text-center">
            SciQuest
          </h1>       
          <p className="text-sm">Science at it's peak</p>
          <p className="text-sm">&copy; Copyright <span id="year">2023</span></p>
        </div>
        
        <div className=" sm:w-52 h-full w-full space-y-2 text-center flex flex-col
        text-lg">
          <h3 className="text-3xl">Quick Links</h3>
          <Link className="hover:opacity-90" to="/"> Home</Link>
          <Link className="hover:opacity-90" to="/about"> About</Link>
          <Link className="hover:opacity-90" to="/discover">Discover</Link>
          <a className="hover:opacity-90 text-xl" href="#">Get started</a>
        </div>
        
        <div className="text-center sm:w-52 h-full w-full flex flex-col space-y-3">
          <h2 className="text-3xl">Contact Us</h2>
          
          <p className="text-lg">Our Email</p>
          <a href="mailto:alfrederic371@gmail.com?subject=feedback"
          className="text-sm"><i className="text-blue-300 fas fa-mail mb-3 text-xl
          underline"></i>
            sciQuestWorld@gmail.com</a>
          
          <div className="flex items-center justify-center space-x-3">
          <div className="text-xl py-3 px-4  bg-blue-500
          text-white rounded-full h-10 w-10 flex items-center justify-center">
            <i className="fab fa-facebook-f"></i>  
          </div>
          <div className="text-xl py-3 px-4  bg-blue-500
          text-white rounded-full h-10 w-10 flex items-center justify-center">
            <i className="fab fa-twitter"></i>  
          </div>
          <div className="text-xl py-3 px-4  bg-blue-500
          text-white rounded-full h-10 w-10 flex items-center justify-center">
            <i className="fab fa-instagram"></i>  
          </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Navbar