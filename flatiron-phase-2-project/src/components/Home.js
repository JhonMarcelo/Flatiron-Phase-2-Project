import React, { useState, useEffect } from "react";

function Home() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch("https://kmok-server.onrender.com/recipes")
      .then((r) => r.json())
      .then((items) => console.log(items));
  }, []);
  return <div>Home</div>;
}

export default Home;
