import React from 'react';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from 'react-router-dom';
const Layout = () => {
    return (
        <div className='layOut'>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
}

export default Layout;
