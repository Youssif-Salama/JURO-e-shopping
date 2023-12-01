import React from 'react';
import MainProducts from '../Home/MainProducts/MainProducts';
const Products = () => {
    return (
        <div className='products'>
            <div className="container my-5">
                <div className="alert alert-primary"><a href="/">JURO</a>/ <span>products</span></div>
            </div>
            <MainProducts />
        </div>
    );
}

export default Products;
