import React from 'react';
import Slider from "react-slick";

const MainSlider = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const MainSliderImages = [
    {
      src: "https://static.vecteezy.com/system/resources/thumbnails/003/240/364/small/shopping-online-on-phone-paper-art-modern-pink-background-gifts-box-free-vector.jpg",
    },
    {
      src: "https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg",
    },
  ];

  function getMainSliderImages() {
    return MainSliderImages.map((img, index) => (
      <div className='sliderParent' key={index}>
        <div className="layout text-light d-flex align-items-center justify-content-center">

          <div className="content d-flex text-center justify-content-center flex-column w-50 h-100">
            <h1 className='welcome_message'>WELCOME
            </h1>
            <p>
              Explore convenience and choice with our online store—exclusive deals, secure payments, and swift delivery. Revolutionize your retail experience with us!</p>
          </div>
        </div>
        <img className='w-100' src={img.src} alt="mainSliderImg" />
      </div>
    ));
  }

  return (
    <div className='mainSlider'>
      <Slider {...settings}>
        {getMainSliderImages()}
      </Slider>
    </div>
  );
}

export default MainSlider;
