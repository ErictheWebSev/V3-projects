import { useState } from 'react'
import { Faq } from './Utils/Content'
import Accordion from './Accordion'
import Logo from './assets/illustration-woman-online-mobile.svg'

const App = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen
    bg-gradient-to-tr from-softBlue to-softViolet px-4">
      <div className="w-80 sm:w-[57rem] h-[35rem] h-auto bg-white flex flex-col
      sm:flex-row p-4 items-center relative shadow shadow-2xl
      shadow-gray-900 rounded-xl sm:space-x-10">
      <div className="sm:w-[60%] sm:h-full w-full h-[40%] flex items-center justify-center">
        <img src={Logo} alt="Logo" className="w-full -translate-y-20 sm:left-0
        sm:-translate-x-16 sm:-translate-y-10 sm:h-full h-40" />
      </div>
      <div className="sm:w-[60%] h-full w-full flex
      flex-col items-center space-y-4 sm:justify-center sm:py-5 sm:px-4">
      <h2 className="text-center text-4xl font-semibold text-darkBlue
      tracking-wide">FAQ</h2>
    { Faq.map(({question, answer}) => (
      <Accordion question={question} answer={answer}  />
    )) }
      </div>
      </div>
   </div>
  )
}

export default App
