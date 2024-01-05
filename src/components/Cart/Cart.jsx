import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";

const Cart = () => {
  const {
    all_product,
    cartItems,
    getTotalCartAmount,
    getTotalCartItems,
    cartOpen,
    setCartOpen,
  } = useContext(ShopContext);

  const cartTotal = getTotalCartItems();

  return (
    <div className="relative">
      {cartOpen && (
        <div
          className="absolute top-0 right-0 overflow-y-auto w-80
         bg-white z-1000 p-4 border-l 
         shadow-lg max-md:w-54 max-md:fixed max-md:mt-72 max-md:mr-4"
        >
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          {all_product.map((product) => {
            if (cartItems[product.id] > 0) {
              return (
                <div key={product.id} className="flex justify-between mb-2">
                  <p className="italic">
                    {product.title.length > 15
                      ? product.title.substr(0, 15) + "..."
                      : product.title}
                  </p>
                  <p className="font-semibold">
                    ₹ {product.price} (Qty. {cartItems[product.id]})
                  </p>
                </div>
              );
            } else {
              return null;
            }
          })}
          <hr className="my-4" />
          <div className="flex justify-between">
            <p>Total:</p>
            <p className="font-bold">₹ {getTotalCartAmount()}</p>
          </div>
          <div className="flex justify-between text-slate-400">
            <p className="">Shipping:</p>
            <p>
              {getTotalCartAmount() > 499 || getTotalCartAmount() === 0
                ? "₹ 0"
                : "₹ 40"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
