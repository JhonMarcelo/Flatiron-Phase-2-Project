import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Home</div>
      <Link to={"/recipe"}>Recipe</Link>
    </>
  );
}

export default Home;
