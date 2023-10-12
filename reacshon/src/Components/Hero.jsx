import HeroBg from '../assets/hero3.png'

const Hero = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row mb-16 p-4 gap-12
    justify-center items-center">
      <article class="sm:w-1/2 relative bg-transparent">
        <h2 className="max-w-md text-4xl text-slate-900 text-center sm:text-5xl
        font-bold sm:text-left">Your Science Discovery 
            <span className="text-secondary"> Destination</span>
        </h2>
        <p className="max-w-md text-xl text-slate-600 text-center sm:text-left mt-8">
            SciQuest is an science discovery platform that lets you get updates
            on 
            science facts and share your reactions and discovery with the community.</p>
      </article>
      
      <img className="sm:w-1/2 sm:mb-0 mb-12" src={HeroBg} alt="Hero" />
    </section>
  )
}

export default Hero