import React, { useState, useEffect } from "react";
import ModalForm from "./ModalForm";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

function Recipe() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/recipes")
      .then((r) => r.json())
      .then((items) => setRecipe(items));
  }, []);

  function handleSubmitForm(newRecipe) {
    setRecipe([...recipe, newRecipe]);
  }
  console.log(recipe);
  function handleDeleteRecipe(id) {
    const newRecipeList = recipe.filter((recipe) => recipe.id !== id);
    setRecipe(newRecipeList);
    console.log(recipe);
    console.log(id);
    // fetch(`http://localhost:3003/recipes/${id}`, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newRecipe),
    // })
    //   .then((r) => r.json())
    //   .then((newItem) => onSubmitForm(newItem));
  }

  return (
    <div>
      <ul>
        {recipe.map((food) => {
          return (
            <>
              <Card key={food.id}>
                <Card.Img variant="top" src={food.image} alt="food_image" />
                <Card.Body>
                  <Card.Text>
                    <h1>{food.name}</h1>
                    <h2>Ingredients</h2>
                    {food.ingredients.map((ingredients) => {
                      return <ul key={crypto.randomUUID()}>{ingredients}</ul>;
                    })}
                  </Card.Text>
                  <Card.Text>
                    <h2>Directions</h2>
                    {food.directions.map((directions) => {
                      return <ul key={crypto.randomUUID()}>{directions}</ul>;
                    })}
                  </Card.Text>
                  <ModalForm onSubmitForm={handleSubmitForm} />
                  <span> </span>
                  <Button onClick={() => handleDeleteRecipe(food.id)}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>

              <br />
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Recipe;
