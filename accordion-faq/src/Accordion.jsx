import { useState } from 'react'

const Accordion = ({question, answer}) => {
  const [active, setActive] = useState(false)
  
  const handleClick = () => {
    setActive(!active)
  }
  
  return (
    <div className="w-full h-auto p-3 border-b-2 border-b-lightGray flex flex-col
    space-y-3" onClick={handleClick}>
     <header className="flex justify-between">
      <div className="text-darkBlue font-semibold">{question}</div>
      <div className="text-lg sm:text-2xl text-softRed">{ active ? '-' : '+' }</div>
     </header>
    { active && <div className="text-softBlue">{ answer }</div>
    }
    </div>
  )
}

export default Accordion