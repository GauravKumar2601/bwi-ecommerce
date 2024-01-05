import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import ProductItem from "../ProductItem/ProductItem";

const AllProducts = (props) => {
  const { all_product, appliedFilter, searchQuery } = useContext(ShopContext);

  let filteredProducts = [];

  // useEffect(() => {
  //   if (searchQuery === "") {
  //     // const searchedProducts = all_product; // Show all products when search query is empty
  //   } else {
  //     // Filter products based on search query
  //     filteredProducts = all_product.filter((product) =>
  //       product.title.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //   }
  // }, [all_product, searchQuery]);

  // Filter products based on the selected price range
  filteredProducts = all_product.filter((product) => {
    if (
      !appliedFilter ||
      (appliedFilter.minPrice === 0 && appliedFilter.maxPrice === 0)
    ) {
      return true; // Return all products if no filter is applied
    }
    // Implement logic to filter products based on the applied filter range
    return (
      product.price >= appliedFilter.minPrice &&
      product.price <= appliedFilter.maxPrice
    );
  });

  return (
    <div
      className="mx-10 my-4 grid grid-cols-4 gap-4 
    max-lg:grid-cols-3 max-md:grid-cols-2"
    >
      {filteredProducts && filteredProducts.length > 0 ? (
        filteredProducts.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
              discountPercentage={product.discountPercentage}
            />
          );
        })
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default AllProducts;
