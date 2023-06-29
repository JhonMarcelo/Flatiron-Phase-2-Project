import { Link } from "react-router-dom";
import banner from "../images/KMOK.png";
import creamy from "../images/creamy-garlic.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <>
      <img class="banner" src={banner} alt="banner" />
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
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={creamy} />
        <Card.Body>
          <Card.Title>Creamy Garlic Chicken</Card.Title>
          <Card.Text>
            You dont have to feel bad eating this delicious food as it will fit
            your macros!
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Home;
