import React, { useState, useContext } from "react";
import "./Navbar.css";
import { ShopContext } from "../../context/ShopContext";
import { FaCartShopping } from "react-icons/fa6";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const {
    getTotalCartItems,
    cartOpen,
    setCartOpen,
    searchQuery,
    setSearchQuery,
  } = useContext(ShopContext);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(searchQuery);
  };
  return (
    <header>
      <nav
        className="flex justify-between my-8 max-md:my-2 mx-20 
      max-md:flex-col bg-blue-100"
      >
        <div className="text-3xl font-bold p-4 max-md:text-center ">
          <h1 className="text-blue-500">BWI-Ecommerce</h1>
        </div>
        <div className="nav-items ">
          <ul
            className="flex p-4 gap-8 text-lg items-center
           text-slate-700 max-md:flex-col max-md:gap-3"
          >
            <li>
              <div className="flex items-center ">
                <input
                  type="text"
                  placeholder="Search for products"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onClick={handleSearch}
                  className=" bg-gray-100 hover:bg-white 
                  hover:ring-opacity-50 hover:ring-gray-500 hover:ring-2
                  border-none text-gray-700 py-1 px-6 rounded-lg 
                  focus:outline-none focus:ring-2 focus:bg-white
                  focus:ring-gray-500 focus:ring-opacity-50"
                />
              </div>
            </li>
            <li>
              <a href="#">User 1</a>
            </li>
            <li>
              <a href="#">All Products</a>
            </li>
            <li>
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={() =>
                  cartOpen === true ? setCartOpen(false) : setCartOpen(true)
                }
              >
                <Cart />
                <FaCartShopping size="2x" className="w-6" />
                <div
                  className="w-5 h-5 flex 
                justify-center items-center -mt-9 my-2 right-[5.2rem]
                rounded-xl text-sm bg-blue-600 text-white
                absolute max-lg:hidden"
                >
                  {getTotalCartItems()}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <hr className="border-2" />
    </header>
  );
};

export default Navbar;
