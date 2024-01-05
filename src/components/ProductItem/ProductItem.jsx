import React, { useState, useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ProductItem = (props) => {
  const { addToCart } = useContext(ShopContext);
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = (productID) => {
    addToCart(productID);

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 500);
  };

  return (
    <section>
      <div className=" rounded-lg shadow-sm overflow-hidden hover:shadow-lg mb-4">
        <div className="py-6 px-2 bg-slate-100">
          <img
            className=" h-full w-full object-contain min-h-40 max-h-40"
            src={props.thumbnail} // Replace 'product.image' with the actual image URL
            alt={props.title}
          />
        </div>
        <h2 className="text-lg font-semibold pl-4 pt-2">
          {props.title.length > 28
            ? props.title.substr(0, 28) + "..."
            : props.title}
        </h2>

        <div className="px-4 py-2 flex items-center gap-1">
          <p className="mt-1 text-gray-700">₹ {props.price}</p>
          <p className="text-orange-500">
            ({Math.floor(props.discountPercentage)}% Off)
          </p>
        </div>

        <div className="flex ">
          <button
            className="border-2 px-4 py-2 mx-4 my-4
             bg-blue-600 hover:bg-blue-500 border-none
             text-white rounded-full"
            onClick={() => handleAddToCart(props.id)}
          >
            Add to cart
          </button>
          {showMessage && (
            <div className="py-4">
              <p className="text-green-400 shadow-sm p-1">Item added +1</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
