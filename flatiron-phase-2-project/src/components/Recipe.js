import React, { useState, useEffect } from "react";
import ModalForm from "./ModalForm";
import Card from "react-bootstrap/Card";

function Recipe() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch("https://kmok-server.onrender.com/recipes")
      .then((r) => r.json())
      .then((items) => setRecipe(items));
  }, []);

  function handleSubmitForm(newRecipe) {}

  return (
    <div>
      <ModalForm onSubmitForm={handleSubmitForm} />
      {recipe.map((food) => {
        return (
          <>
            <Card>
              <Card.Img variant="top" src={food.image} alt="food_image" />
              <Card.Body>
                <Card.Text>
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
