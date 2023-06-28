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

  const [ingredients, setIngredients] = useState([{ ingredient: "" }]);

  function handleSubmit(e) {
    e.preventDefault();
    const newRecipe = {
      name: name,
      category: category,
      image: image,
    };
    console.log(newRecipe);
  }

  function handleAddIngredients() {
    setIngredients([...ingredients, { ingredient: "" }]);
  }
  function handleRemoveIngredients() {}
  function handleChange() {}

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
              <Form.Label>Ingredients </Form.Label>
              <Button onClick={handleAddIngredients}>Add</Button>
              {ingredients.map((ingredient, i) => {
                return (
                  <>
                    <Form.Control
                      type="text"
                      placeholder="Enter Ingredient"
                      value={ingredient}
                      onChange={(e) => handleChange(e, i)}
                    />
                    <Button onClick={handleRemoveIngredients}>Remove</Button>
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
