import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome to React Design Pattern!</h1>
      <Link to={"/compound"}>
        <h3>1. Compound Components Pattern</h3>
      </Link>
    </>
  );
};

export default Home;
