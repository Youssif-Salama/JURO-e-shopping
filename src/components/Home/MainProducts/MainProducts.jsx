// import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../../contexts/HomeContext";
import { Link } from "react-router-dom";
const MainProducts = () => {
  // making loader var
  const [loader, setLoader] = useState(true);
  // destructing vars and methods from context (HomeContext)
  let { getAllProducts } = useContext(HomeContext);
  // making state var to carry result
  const [products, setProducts] = useState([]);
  // making function to get all products
  async function getAllProductsM() {
    let result = await getAllProducts();
    setProducts(result?.data?.data);
    setLoader(false);
  }
  // mounting phase
  useEffect((_) => {
    getAllProductsM();
  }, []);
  return (
    <>
      {loader ? (
        <div className="loading">
          <div className="loader">
            <div className="loader_cube loader_cube--color"></div>
            <div className="loader_cube loader_cube--glowing d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-bag-shopping"></i>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row m-0">
            {products?.map((product, index) => (
              <Link
                to={`/home/${product._id}`}
                className="product col-lg-4 col-md-6 col-11 mx-auto my-3"
                key={index}
              >
                <div className="product_card">
                  <div className="product_details">
                    <div className="img_cover d-flex align-items-center justify-content-center">
                      <img
                        className="w-100 h-100"
                        src={product?.imageCover}
                        alt="pla-pla"
                      />
                    </div>
                    <h2 className="product_name p-1 m-0">
                      {product?.brand?.name}
                      {product?.category?.name}
                    </h2>
                    <p className="product_title p-1">{product?.title}</p>
                    <div className="rating_and_price d-flex align-items-center justify-content-between">
                      <span className="price p-2">{product?.price} EGP</span>
                      <span className="rating p-2">
                        {product?.ratingsAverage}{" "}
                        <i className="star fa-solid fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <div className="product_features"></div>
                  <button className="juro_btn w-100">details</button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MainProducts;
