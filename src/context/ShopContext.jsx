import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

// const getDefaultCart = (products) => {
//   let cart = {};
//   for (let index = 0; index < products.length + 1; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// };

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [all_product, setAllProduct] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [appliedFilter, setAppliedFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setAllProduct([]); // Set products to an empty array in case of an error
      });
  }, []);

  useEffect(() => {
    console.log(all_product); // This will log whenever all_product changes
  }, [all_product]);

  const addToCart = (productId) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [productId]: (prevCartItems[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  // Function to set the applied filter
  const applyFilter = (filterValue) => {
    setAppliedFilter(filterValue);
  };

  //Function to set the search query
  const applySearch = (searchValue) => {
    setSearchQuery(searchValue);
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    cartOpen,
    setCartOpen,
    getTotalCartAmount,
    getTotalCartItems,
    applyFilter,
    appliedFilter,
    applySearch,
    searchQuery,
    setSearchQuery,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
