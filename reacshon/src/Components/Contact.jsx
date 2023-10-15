
const Contact = () => {
  return (
    <section id="" className="max-w-5xl px-3 py-4 mt-16">
      <h2 className="text-4xl text-secondary text-center font-bold mt-32 underline-offset-0 mb-4">Get In Touch </h2>
      <div className="flex flex-wrap flex-col sm:flex-row w-full items-center justify-center space-y-5 sm:justify-around mt-5">
      <div className="w-80 sm:w-56 h-80 sm:h-56  py-10 px-4 rounded-full block
      shadow shadow-lg bg-white flex items-center justify-center flex-col">
       <div className="text-7xl text-white w-20 h-20 flex items-center
       justify-center rounded-full bg-secondary space-y-4">
        <i class="fas fa-envelope text-center"></i>
       </div>
       <h3 className="mt-6 text-xl text-center text-gray-600">Reachout to us
       through our mail</h3>        
      </div>
    </div>
    </section>
  )
}

export default Contact