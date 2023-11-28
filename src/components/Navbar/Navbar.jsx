import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { MainContext } from "../../contexts/MainContext";
const Navbar = () => {
  let { userToken } = useContext(MainContext);
  // making logout function to clear local storage
  function clearUserToken() {
    localStorage.clear();
  }
  return (
    <div className="nav_bar p-3">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="nav_logo">
          <Link to="/" className="h1">
            JURO
          </Link>
        </div>
        <div className="nav_links d-flex align-items-center justify-content-between">
          <ul className="d-flex align-items-center m-auto mx-3">
            <li className="mx-2">
              <Link to={"/"}>home</Link>
            </li>
            {userToken !== null ? (
              <li className="mx-2">
                <Link to={"shop"}>shop</Link>
              </li>
            ) : null}

            <li className="mx-2">
              <Link to={"products"}>products</Link>
            </li>
            {userToken !== null ? (
              <>
                <li className="mx-2">
                  <Link to={"features"}>features</Link>
                </li>
                <li className="mx-2">
                  <Link to={"more"}>more</Link>
                </li>
              </>
            ) : null}
          </ul>
          {userToken?.length > 0 ? (
            <div className="user_drop">
              <i className="fa-solid fa-user"></i>
              <ul className="text-center">
                <li>
                  <a href="/" onClick={clearUserToken}>
                    logout
                  </a>
                </li>
                <li>
                  <a href="/user">user</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={'/signup'} className="nav_register juro_btn">
              <a href="/signup" className="text-light">
                register
              </a>
            </Link>
          )}
          <div className="nav_menu mx-2 px-1">
            <i className="fa-solid fa-bars">
              <div className="d-flex flex-column">
                <a href="/">home</a>
                <a href="shop">shop</a>
                <a href="products">products</a>
                <a href="features">features</a>
                <a href="more">more</a>
              </div>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
