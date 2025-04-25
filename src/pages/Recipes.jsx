import Card from '../components/Card'
// import hamburger from '../assets/hamburger.svg'
// import pizza from '../assets/slice-of-pizza.svg'
import demoFoodPic from '../assets/restaurant50.svg'

const Recipes = ( {recipes} ) => {
  //console.log(recipes)
  return (
    <div>
      <h1>Recipes</h1>
      <p>Explore the recipes:</p>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}> 
            <Card 
              foodPic={demoFoodPic} 
              name={recipe.name} 
              recipe={recipe.recipe} 
              ingredients={recipe.ingredients} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Recipes

// key={person.name}>
// {person.name}
// {person.number}
// <button onClick={() => deletePerson(person.id, person.name)}> delete</button>