import AboutBg from '../assets/hero2.jpg'


const About = () => {
  return (
    <section id="about" class="flex flex-col-reverse sm:flex-row mt-28 p-4
    sm:space-x-7 justify-between items-center">
      <article class="sm:w-full w-screen py-6 px-4 sm:rounded-xl sm:max-w-prose">
       <h2 class="text-4xl text-secondary text-center font-bold mt-32 underline-offset-0">Welcome to SciQuest, your portal for exploring the wonders of science and innovation.</h2>
       
      </article>
      
      <img class="sm:w-1/2 mb-8 rounded-lg  border-l-8 border-l-blue-500"
      src={AboutBg} alt="Rocket dab" />
    </section>
  )
}

export default About