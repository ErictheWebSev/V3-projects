import { useState, useEffect } from 'react'
import RecipeList from './Components/RecipeList'

const App = () => {
  const [recipe, setRecipe] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  
  const [isLoading, setIsLoading] = useState(true)
  
    function fetchRecipe() {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      .then(res => res.json())
      .then(data => {
        setRecipe(data.meals)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
        alert(err)
        setIsLoading(false)
      })
    }
    
  useEffect(() => {
  fetchRecipe()
  }, [searchQuery])
  
  const handleSearch = () => {
    fetchRecipe()
  }
  
  
  
  
  
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full h-full max-w-3xl bg-white px-4 py-6 flex
      items-center flex-col">
        <h2 className="h2 text-4xl font-semibold font-mono">Foodie</h2>
        <div className="flex my-6 px-4 relative w-full">
          <input type="search" placeholder="Full Name" className="h-full w-full
          w-80 h-14 py-5 border border-gray-400 focus:border-[#302fc7] pr-11 pl-4
          text-lg text-gray-800 rounded-lg outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="fas fa-search translate-x-3 translate-y-4 text-xl
          right-12 text-gray-600 absolute"
          onClick={handleSearch}
          ></button>
        </div>
         { isLoading && <h2 className="text-2xl text-center
         text-blue-500">Getting foods...</h2> }
        { recipe && <RecipeList recipes={recipe}  /> }

      </div>
    </div>
  )
}

export default App
