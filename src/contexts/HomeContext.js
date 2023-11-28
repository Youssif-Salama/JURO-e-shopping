import axios from "axios";
import React, { createContext } from "react";
export let HomeContext = createContext();
// function to get all home page products
async function getAllProducts() {
  return await axios
    .get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then((result) => result)
    .catch((error) => error);
}
// function to get specific product
async function getSpecificProduct(productId) {
  return await axios
    .get(`https://ecommerce.routemisr.com/api/v1/products/${productId}`)
    .then((result) => result)
    .catch((error) => error);
}
async function getAllCategories() {
  return await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    .then((result) => { return result })
    .catch((error) => { return error })
}
export function HomeContextFun(props) {
  return (
    <HomeContext.Provider value={{ getAllProducts, getSpecificProduct, getAllCategories }}>
      {props.children}
    </HomeContext.Provider>
  );
}
