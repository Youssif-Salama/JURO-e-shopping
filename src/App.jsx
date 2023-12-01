import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Products from "./components/Products/Products";
import Features from "./components/Features/Features";
import ProtectedRouter from "./components/ProtectedRouter/ProtectedRouter";
import More from "./components/More/More";
import "./App.css";
import { HomeContextFun } from "./contexts/HomeContext";
import { MainContextFun } from "./contexts/MainContext";
import SpecificProduct from "./components/Home/MainProducts/SpecificProduct/specificProduct";
import Signup from "./components/Signup/Signup";
import { SignupContextFun } from "./contexts/SignupContext";
import toast, { Toaster } from "react-hot-toast";
import Login from "./components/Login/Login";
import LoginContextFun from "./contexts/LoginContext";
import WishListContextFun from "./contexts/WishListContext";

function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "Shop",
          element: (
            <ProtectedRouter>
              <Shop />
            </ProtectedRouter>
          ),
        },
        { path: "Products", element: <Products /> },
        {
          path: "Features",
          element: (
            <ProtectedRouter>
              <Features />
            </ProtectedRouter>
          ),
        },
        { path: "Signup", element: <Signup /> },
        { path: "Login", element: <Login /> },
        {
          path: "home/:productId",
          element: (
            <ProtectedRouter>
              <SpecificProduct />
            </ProtectedRouter>
          ),
        },
        {
          path: "More",
          element: (
            <ProtectedRouter>
              <More />
            </ProtectedRouter>
          ),
        },
      ],
    },
  ]);

  return (
    <div className="app">
      <Toaster />
      <WishListContextFun>
        <LoginContextFun>
          <SignupContextFun>
            <MainContextFun>
              <HomeContextFun>
                <RouterProvider router={routes}>
                  {/* Remove the duplicate Layout component */}
                </RouterProvider>
              </HomeContextFun>
            </MainContextFun>
          </SignupContextFun>
        </LoginContextFun>
      </WishListContextFun>
    </div>
  );
}

export default App;
