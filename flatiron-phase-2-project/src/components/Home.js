import { Link } from "react-router-dom";
import banner from "../images/KMOK2.png";
import creamy from "../images/creamy-garlic.jpg";
import pizza from "../images/pizza.jpg";
import Card from "react-bootstrap/Card";
import Recipe from "./Recipe";

function Home() {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src={banner} alt="Card image" />
        <Card.ImgOverlay></Card.ImgOverlay>
      </Card>
      Check out
      <Link to={"/recipe"}> Recipes </Link>
      to get started!
      <br></br>
      <br></br>
      <div>
        <h1>
          <strong>Easy Keto Recipes</strong>
        </h1>
      </div>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={creamy} />
          <Card.Body>
            <Card.Title>Creamy Garlic Chicken</Card.Title>
            <Card.Text>
              You dont have to feel bad eating this delicious food as it will
              fit your macros!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={pizza} />
          <Card.Body>
            <Card.Title>Cauliflower Crust Pizza</Card.Title>
            <Card.Text>
              Craving for pizza? No problem! We got you covered!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Home;
