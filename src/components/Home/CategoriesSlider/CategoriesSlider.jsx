import React, { useContext, useEffect, useState } from 'react';
import { HomeContext } from '../../../contexts/HomeContext';
import Slider from 'react-slick';
const CategoriesSlider = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: -3,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }]
    };
    const { getAllCategories } = useContext(HomeContext);
    const [flag, setFlag] = useState(true);
    const [allCategories, setAllCategories] = useState([]);
    // making function that help to call HomeContext
    async function getAllCategoriesM() {
        let response = await getAllCategories();
        if (response?.status === 200) setAllCategories(response.data.data); setFlag(false);
    }
    useEffect(() => {
        getAllCategoriesM();
    }, [])
    return (
        <div className='categoriesSlider mb-3'>
            {flag ? <div className="container"><span className="loader"></span></div>
                :
                <Slider {...settings}>
                    {allCategories.map((ac, index) => (
                        <div key={index}>
                            <img src={ac.image} alt="category-img" />
                        </div>
                    ))}
                </Slider>
            }

        </div>
    );
}

export default CategoriesSlider;
