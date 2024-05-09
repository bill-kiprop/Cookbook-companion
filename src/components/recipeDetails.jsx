import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'

function RecipeDetails() {
  const [dishes, setDishes] = useState();
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${params.id}`)
      .then((response) => response.json())
      .then((data) => setDishes(data));
  }, params.id);
  const Details = ({ portion, image, method, time, ingredients , description }) => {
    return (
      
      <div>
        <img className="image"src={image} />
        <p>{description}</p>
        <p>Difficulty: {difficulty}</p>
        <p>Portion: {portion}</p>
        <p>Time: {time}</p>
        <p>Ingredients: {ingredients}</p>
        <p>Method: {method}</p>
      </div>
      
    );
  };

  return (
<div>
        {dishes.map((dish) => (
          <RecipeDetails
            key={dish.id}
            portion={dish.portion}
            time={dish.time}
            description={dish.description}
            ingredients={dish.ingredients}
            method={dish.method}
            image={dish.image}

          />
        ))}
      </div>

  )
}


export default RecipeDetails;