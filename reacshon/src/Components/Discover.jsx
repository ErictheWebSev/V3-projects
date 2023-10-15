import Science from '../assets/hero5.jpg'
import Chemistry from '../assets/hero6.jpg'


const Discover = () => {
  return (
    <section id="courses" className="max-w-5xl px-3 py-4 mt-16">
      <h2 className="text-4xl text-secondary text-center font-bold mt-32 underline-offset-0 mb-4">Explore Fascinating Science </h2>
      <p className="text-lg text-gray-400 text-center">Embark on a journey through the world of science and innovation.</p>
      
       <div className="flex flex-wrap flex-col sm:flex-row w-full items-center justify-center space-y-5 sm:justify-around mt-5">
        <div className="course-box rounded-xl">
          <img className="w-full rounded-t-xl h-64" src={Science} alt="" />
          <div className="max-w-prose p-4 space-y-3 text-center flex
          items-center flex-col">
          <h2 className="text-2xl text-gray-800 capitalize
          font-bold">Microbiology Experiment</h2>
          <p className="text-lg text-gray-500">Kyla Willinson</p>
          <button className="w-full h-16 py-4 px-5 text-center bg-secondary text-lg
          text-white rounded-xl">View Details</button>
          </div>
        </div>
        <div className="course-box rounded-xl translate-y-5">
          <img className="w-full rounded-t-xl h-64" src={Chemistry} alt="" />
          <div className="max-w-prose p-4 space-y-3 text-center flex
          items-center flex-col">
          <h2 className="text-2xl text-gray-800 capitalize
          font-bold">Chemistry Hypothesis</h2>
          <p className="text-lg text-gray-500">Mark Jeff</p>
          <button className="w-full h-16 py-4 px-5 text-center bg-secondary text-lg
          text-white rounded-xl">View Details</button>
          </div>
        </div>
        <div className="course-box rounded-xl translate-y-10">
          <img className="w-full rounded-t-xl h-64" src={Science} alt="" />
          <div className="max-w-prose p-4 space-y-3 text-center flex
          items-center flex-col">
          <h2 className="text-2xl text-gray-800 capitalize
          font-bold">Microbiology Experiment</h2>
          <p className="text-lg text-gray-500">Kyla Willinson</p>
          <button className="w-full h-16 py-4 px-5 text-center bg-secondary text-lg
          text-white rounded-xl">View Details</button>
          </div>
        </div>
       </div>
    </section>
  )
}

export default Discover
