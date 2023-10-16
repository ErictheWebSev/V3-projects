import Science from '../assets/hero5.jpg'
import Chemistry from '../assets/hero6.jpg'
import imageData from '../assets/image4.jpg'


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
          <img className="w-full rounded-t-xl h-64" src={imageData} alt="" />
          <div className="max-w-prose p-4 space-y-3 text-center flex
          items-center flex-col justify-center">
          <h2 className="text-2xl text-gray-800 capitalize
          font-bold">Atomic Regeneration</h2>
          <p className="text-lg text-gray-500">Stone Graham</p>
          <button className="w-full h-16 py-4 px-5 text-center bg-secondary text-lg
          text-white rounded-xl">View Details</button>
          </div>
        </div>
       </div>
       
       
        <div className="flex w-full items-center justify-center mt-32 h-80 px-9
        py-6 bg-secondary flex-col rounded-xl">
        <p className="text-lg text-white font-mono">We've gathered over 5000
        participants</p>
          <h1 className="text-2xl text-center text-white font-semibold my-5"> Stay Connected
          With Us</h1>
          <h1 className="text-lg text-center text-white font-semibold mb-5">
          Subscribe to our newsletter</h1>
          
          <div className="flex justify-between">
            <div className="sm:w-72 h-16 w-56">
              <input type="email" placeholder="Youremail@example.com"
              className="w-full h-full py-5 px-4 text-gray-400 bg-transparent
              border border-white text-white text-sm rounded-l-xl
              placeholder-white outline-none "
              />
            </div>
            <div>
              <button className="w-20 h-16 py-5 px-4 text-center bg-white
              rounded-r-xl">Subscribe</button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Discover
