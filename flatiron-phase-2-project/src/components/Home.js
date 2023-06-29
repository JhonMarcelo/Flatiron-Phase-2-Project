import { Link } from "react-router-dom";
import banner from "../images/KMOK.png";

function Home() {
  return (
    <>
      <img class="banner" src={banner} alt="banner" />
      <div>Home</div>
      <Link to={"/recipe"}>Recipe</Link>
    </>
  );
}

export default Home;
