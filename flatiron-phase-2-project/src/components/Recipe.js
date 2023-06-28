import React, { useState, useEffect } from "react";

function Recipe() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch("https://kmok-server.onrender.com/recipes")
      .then((r) => r.json())
      .then((items) => setRecipe(items));
  }, []);
  return (
    <div>
      {recipe.map((food) => {
        return (
          <>
            <ul>{food.name}</ul>
            <img src={food.image} alt="Food Image" />
          </>
        );
      })}
    </div>
  );
}

export default Recipe;
