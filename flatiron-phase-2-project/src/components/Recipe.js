import React, { useState, useEffect } from "react";
import ModalForm from "./ModalForm";
import Card from "react-bootstrap/Card";

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

  return (
    <div>
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
                    return <ul>{ingredients}</ul>;
                  })}
                </Card.Text>
                <Card.Text>
                  <h2>Directions</h2>
                  {food.directions.map((directions) => {
                    return <ul>{directions}</ul>;
                  })}
                </Card.Text>
                <ModalForm onSubmitForm={handleSubmitForm} />
              </Card.Body>
            </Card>

            <br />
          </>
        );
      })}
    </div>
  );
}

export default Recipe;
