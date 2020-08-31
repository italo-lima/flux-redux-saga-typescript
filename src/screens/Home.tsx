import React from "react";
import Catalog from "../components/Catalog";
import Cart from "../components/Cart";

const Home: React.FC = () => {
  return (
    <>
      <h1>Home</h1>
      <Catalog />
      <Cart />
    </>
  );
};

export default Home;
