import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HomeContext } from "../../../../contexts/HomeContext";
import { MainContext } from "../../../../contexts/MainContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SpecificProduct = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // making function to catch img_cover div and img_slider
  function actionsOnClickCover() {
    const img_slider = document.querySelector(".img_slider");
    img_slider.style.display = "block";
  }
  function actionsOnClickCoverClose() {
    const img_slider = document.querySelector(".img_slider");
    img_slider.style.display = "none";
  }
  // destructing vars and methods from MainContext
  let { loader, setLoader } = useContext(MainContext);
  // destructing vars and methods from HomeContext
  let { getSpecificProduct } = useContext(HomeContext);
  // var to catch productId on click product in Home page
  const { productId } = useParams();
  // making var to carry result
  const [specificProduct, setSpecificProduct] = useState([]);
  // making function to call getSpecificProduct
  async function getSpecificProductM() {
    let result = await getSpecificProduct(productId);
    setSpecificProduct(result?.data?.data);
    setLoader(false);
    console.log(result.data.data);
  }
  useEffect((_) => {
    getSpecificProductM();
  }, []);
  return (
    <div className="minHeight p-4">
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
        <div className="specificProduct container">
          <div className="returnToHome">
            <a href="/">
              <i className="fa-solid fa-circle-left"></i>
            </a>
          </div>

          <div className="product_info row d-flex align-items-start justify-content-between">
            <div className="product_info_l my-2 col-md-8 col-12">
              <div className="c h4 p-2 d-flex align-items-center justify-content-between">
                <div className="brand_name">
                  brand: {specificProduct?.brand?.name}
                </div>
                <div className="category_name">
                  category: {specificProduct?.category?.name}
                </div>
              </div>
              <div className="r p-2 row d-flex align-items-center justify-content-between">
                <div className="img_cover col-md-6">
                  <img
                    onClick={actionsOnClickCover}
                    className="w-100"
                    src={specificProduct?.imageCover}
                    alt="img-cover"
                  />
                </div>
                <div className="r_details col-md-6">
                  <div className="product_title">{specificProduct?.title}</div>
                  <div className="product_sold">
                    sold: {specificProduct?.sold}
                  </div>
                </div>
              </div>
              <div className="f h4 m-0 p-2 d-flex align-items-center justify-content-between">
                <div className="f_price">
                  price: {specificProduct?.price} EGP
                </div>
                <div className="f_brand_img">
                  <img
                    className="w-100"
                    src={specificProduct?.brand?.image}
                    alt="brand_img"
                  />
                </div>
              </div>
            </div>
            <div className="product_info_r my-2 text-center p-0 col-md-3 col-12">
              <div className="r_title h6 text-center m-0 p-2">
                product details
              </div>
              <div className="all">
                {specificProduct?.reviews?.length > 0 ? (
                  <>
                    <p className="r_reviews">{specificProduct?.reviews}</p>
                  </>
                ) : (
                  <>
                    <p className="reviews text-center text-warning">
                      there are no reviews
                    </p>
                  </>
                )}
                <p className="rating_quantity m-0 p-0">
                  rating quantity: {specificProduct?.ratingsQuantity}
                </p>
                <p className="rating_avg m-0 p-0">
                  rating Average: {specificProduct?.ratingsAverage}
                </p>
                <button className="juro_btn w-100">add to cart</button>
              </div>
            </div>
          </div>
          <div className="img_slider">
            <Slider {...settings}>
              {specificProduct.images.map(img => (
                <div className="img_slide d-flex align-items-center justify-content-center" key={specificProduct._id}>
                  <img src={img} alt="imgs" />
                </div>
              ))}
            </Slider>
            <i
              onClick={actionsOnClickCoverClose}
              class="fa-solid fa-circle-xmark"
            ></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecificProduct;
