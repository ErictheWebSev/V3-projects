import { useState } from 'react'
import RecipeDetail from './RecipeDetail'

const RecipeList = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  
  const handleDetail = (recip) => {
    setSelectedRecipe(recip)
  }
  
  const handleDetailClose = (recip) => {
    setSelectedRecipe(null)
  }
  
  return (
    <div className="flex flex-wrap px-6 py-4 w-full items-center justify-around space-y-5">
    { recipes.map((recipe, index) => (
      <div key={index} className="w-80 h-50 rounded-xl  shadow shadow-gray-200
      bg-gray-100 shadow shadow-lg shadow-[rgba(0,0,0,0.3)]">
 
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full
        rounded-t-xl" /> 
        <div className="p-4 space-y-4">
          <h2 className="text-gray-700 text-center text-3xl ">{recipe.strMeal}</h2>
        { selectedRecipe ? '' : <button className="w-full h-12 px-3 text-center py-3 text-lg
          bg-[#302fc7] rounded-xl text-white"
          onClick={() => handleDetail(recipe)}
          >See More...</button>  }
        
          {selectedRecipe === recipe && (
        <RecipeDetail recipe={selectedRecipe} onClose={handleDetailClose} />
         )}
        </div>
      </div>
      )) }
    </div>
  )
}

export default RecipeList