import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function ModalForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Breakfast");
  const [image, setImage] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newIngredient = ingredients.map((ingredient) => {
      return ingredient.Ingredient;
    });

    const newDirection = directions.map((direction) => {
      return direction.Direction;
    });

    const newRecipe = {
      name: name,
      category: category,
      image: image,
      ingredients: newIngredient,
      directions: newDirection,
    };
    console.log(newIngredient);
    console.log(newDirection);
  }

  function handleAddIngredients() {
    setIngredients([...ingredients, { ingredient: "" }]);
  }
  function handleRemoveIngredients(i) {
    const deleteIngredient = [...ingredients];
    deleteIngredient.splice(i, 1);
    setIngredients(deleteIngredient);
  }
  function handleIngredientChange(e, i) {
    const { name, value } = e.target;
    const onChangeVal = [...ingredients];
    onChangeVal[i][name] = value;
    setIngredients(onChangeVal);
  }

  function handleAddDirections() {
    setDirections([...directions, { direction: "" }]);
  }

  function handleRemoveDirections(i) {
    const deleteDirection = [...directions];
    deleteDirection.splice(i, 1);
    setDirections(deleteDirection);
  }
  function handleDirectionsChange(e, i) {
    const { name, value } = e.target;
    const onChangeVal = [...directions];
    onChangeVal[i][name] = value;
    setDirections(onChangeVal);
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Recipe
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter New Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="editmodal" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter recipe name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                aria-label="Default select example"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="1">Breakfast</option>
                <option value="2">Lunch</option>
                <option value="3">Dinner</option>
              </Form.Select>
              <Form.Label>Image</Form.Label>
              <Form.Control
                name="image"
                type="text"
                placeholder="Enter image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <br></br>
              {/* INGREDIENTS */}
              <Form.Label>Ingredients </Form.Label>
              <Button onClick={handleAddIngredients}>Add</Button>
              {ingredients.map((ingredient, i) => {
                return (
                  <>
                    <Form.Control
                      type="text"
                      placeholder="Enter Ingredient"
                      name="Ingredient"
                      value={ingredient.ingredients}
                      onChange={(e) => handleIngredientChange(e, i)}
                    />
                    <Button onClick={() => handleRemoveIngredients(i)}>
                      Remove
                    </Button>
                  </>
                );
              })}
              <br></br>
              {/* DIRECTIONS */}
              <Form.Label>Directions </Form.Label>
              <Button onClick={handleAddDirections}>Add</Button>
              {directions.map((direction, i) => {
                return (
                  <>
                    <Form.Control
                      type="text"
                      placeholder="Enter Steps"
                      name="Direction"
                      value={direction.directions}
                      onChange={(e) => handleDirectionsChange(e, i)}
                    />
                    <Button onClick={() => handleRemoveDirections(i)}>
                      Remove
                    </Button>
                  </>
                );
              })}
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
