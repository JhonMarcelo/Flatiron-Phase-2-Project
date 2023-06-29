import { Link } from "react-router-dom";
import banner from "../images/KMOK.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <>
      <img class="banner" src={banner} alt="banner" />
      Check out
      <Link to={"/recipe"}> Recipes </Link>
      to get started!
    </>
  );
}

export default Home;
