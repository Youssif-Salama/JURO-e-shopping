import React from "react";
import MainProducts from "./MainProducts/MainProducts";
import MainSlider from "./MainSlider/MainSlider";
import CategoriesSlider from "./CategoriesSlider/CategoriesSlider";
const Home = () => {
  return (
    <div className="home">
      <MainSlider />
      <CategoriesSlider />
      <MainProducts />
      <p></p>
    </div>
  );
};

export default Home;
