const RecipeDetail = ({ recipe, onClose }) => {
  const ingredients = [];

  // Loop through the properties "strIngredient1" to "strIngredient20"
  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;

    // Check if the ingredient exists (is not an empty string)
    if (recipe[ingredientKey]) {
      const ingredient = recipe[ingredientKey];
      const measure = recipe[measureKey];

      // Push the ingredient and measure to the array
      ingredients.push(`${measure} ${ingredient}`);
    }
  }
  return (
      <div  className="w-full h-auto z-10 rounded-xl
      bg-gray-100">
          
          <h3 className="text-blue-500 text-xl">Ingredients:</h3>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-blue-700 text-lg">{ingredient}</li>
            ))}
          </ul>
          <h3 className="text-blue-500 text-xl text-center mt-4">How to prepare</h3>
          <p className="text-gray-500 text-lg tracking-wide">{recipe.strInstructions}</p>
          <button className="w-full h-12 px-3 text-center py-3 text-lg
          bg-[#302fc7] rounded-xl text-white"
          onClick={onClose}
          >Close...</button>
        </div>
  )
}

export default RecipeDetail



