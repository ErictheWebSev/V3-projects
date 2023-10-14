import AboutBg from '../assets/hero2.jpg'


const About = () => {
  return (
    <section id="about">
    <div className="flex flex-col-reverse sm:flex-row mt-28 p-4 sm:space-x-7 justify-between items-center">
      <article className="sm:w-1/2 relative bg-transparent">
       <h2 className="text-4xl text-secondary text-center font-bold mt-32
       underline-offset-0">About SciQuest </h2>
       <p className="max-w-md text-lg text-slate-600 text-center mt-8 font-semibold">
         Welcome to SciQuest, your portal for exploring the wonders of science and innovation.
       </p>
       
       <p className="max-w-md text-lg text-slate-600 text-center sm:text-left mt-8">
         SciQuest is a platform dedicated to fostering curiosity and knowledge in the world of science. Our mission is to provide a platform where you can embark on a journey of discovery, engage with cutting-edge research, and connect with a community of passionate science enthusiasts
       </p>
       
      </article>
      
      <img className="sm:w-1/2 mb-8 rounded-lg  sm:border-l-8
      sm:border-l-blue-500"
      src={AboutBg} alt="Rocket dab" />
      </div>
    
      <div className="max-w-5xl px-3 py-4">
       <h2 className="text-4xl text-secondary text-center font-bold mt-32 underline-offset-0 mb-4">Why Choose SciQuest </h2>
       <div className="flex flex-wrap flex-col sm:flex-row w-full items-center justify-center space-y-5 sm:justify-around mt-5">
         <div className="w-80 sm:w-56 h-[15rem] py-10 px-4 rounded-xl block
         shadow shadow-lg bg-white flex items-center items-center flex-col">
           <div className="text-4xl text-white w-16 h-16 flex items-center
           justify-center rounded-xl bg-secondary space-y-4">
            <i class="fas fa-bars text-center"></i>
           </div>
           <h3 className="mt-6 text-xl text-center text-gray-600">Explore a wide spectrum of scientific fields and breakthroughs.</h3>        
         </div>
         <div className="w-80 sm:w-56 h-[15rem] py-10 px-4 rounded-xl block
         shadow shadow-lg bg-white flex items-center items-center flex-col">
           <div className="text-4xl text-white w-16 h-16 flex items-center
           justify-center rounded-xl bg-secondary space-y-4">
            <i class="fas fa-flask text-center"></i>
           </div>
           <h3 className="mt-6 text-xl text-center text-gray-600">Stay updated
           with the latest scientific developments and research findings.</h3>
           
         </div>
         <div className="w-80 sm:w-56 h-[15rem] py-10 px-4 rounded-xl block
         shadow shadow-lg bg-white flex items-center items-center flex-col">
           <div className="text-4xl text-white w-16 h-16 flex items-center
           justify-center rounded-xl bg-secondary space-y-4">
            <i class="fas fa-user text-center"></i>
           </div>
           <h3 className="mt-6 text-xl text-center text-gray-600">Connect with scientists, researchers, and fellow science enthusiasts.</h3>        
         </div>
        </div>
       </div>
       
    </section>
    
  )
}

export default About