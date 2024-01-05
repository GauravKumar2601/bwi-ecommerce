import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";

const Filter = () => {
  const { applyFilter } = useContext(ShopContext);
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (minPrice, maxPrice = 10000000) => {
    // Set the applied filter range using the context
    if (selectedFilter === `${minPrice}-${maxPrice}`) {
      setSelectedFilter(""); // Deselect the current filter if it's already selected
      applyFilter({ minPrice: 0, maxPrice: 0 }); // Show all products
    } else {
      setSelectedFilter(`${minPrice}-${maxPrice}`);
      applyFilter({ minPrice, maxPrice }); // Set the selected filter
    }
  };

  return (
    <aside
      className="text-left px-10 my-4 w-1/4 min-h-screen border-x-2
      max-md:w-full max-md:min-h-2"
    >
      <h2 className="text-xl font-bold font-sans">Filter</h2>
      <div className="prices py-4">
        <ul className="">
          <li className="gap-1 flex">
            <input
              type="checkbox"
              name="priceFilter"
              id="priceFilter1"
              className="px-2"
              onChange={() => handleFilterChange(99, 199)}
              disabled={selectedFilter !== "" && selectedFilter !== "99-199"}
            />
            <label htmlFor="priceFilter1">Rs.99 to Rs.199</label>
          </li>
          <li className="gap-1 flex">
            <input
              type="checkbox"
              name="priceFilter"
              id="priceFilter2"
              className="px-2"
              onChange={() => handleFilterChange(200, 299)}
              disabled={selectedFilter !== "" && selectedFilter !== "200-299"}
            />
            <label htmlFor="priceFilter2">Rs.200 to Rs.299</label>
          </li>
          <li className="gap-1 flex">
            <input
              type="checkbox"
              name="priceFilter"
              id="priceFilter3"
              className="px-2"
              onChange={() => handleFilterChange(300, 399)}
              disabled={selectedFilter !== "" && selectedFilter !== "300-399"}
            />
            <label htmlFor="priceFilter3">Rs.300 to Rs.399</label>
          </li>
          <li className="gap-1 flex">
            <input
              type="checkbox"
              name="priceFilter"
              id="priceFilter4"
              className="px-2"
              onChange={() => handleFilterChange(400, 499)}
              disabled={selectedFilter !== "" && selectedFilter !== "400-499"}
            />
            <label htmlFor="priceFilter4">Rs.400 to Rs.499</label>
          </li>
          <li className="gap-1 flex">
            <input
              type="checkbox"
              name="priceFilter"
              id="priceFilter5"
              className="px-2"
              onChange={() => handleFilterChange(500, 599)}
              disabled={selectedFilter !== "" && selectedFilter !== "500-599"}
            />
            <label htmlFor="priceFilter5">Rs.500 to Rs.599</label>
          </li>
          <li className="gap-1 flex">
            <input
              type="checkbox"
              name="priceFilter"
              id="priceFilter6"
              className="px-2"
              onChange={() => handleFilterChange(600, 699)}
              disabled={selectedFilter !== "" && selectedFilter !== "600-699"}
            />
            <label htmlFor="priceFilter6">Rs.600 to Rs.699</label>
          </li>
          <li className="gap-1 flex">
            <input
              type="checkbox"
              name="priceFilter"
              id="priceFilter7"
              className="px-2"
              onChange={() => handleFilterChange(700)}
              disabled={selectedFilter !== "" && selectedFilter !== "700"}
            />
            <label htmlFor="priceFilter7">Rs.700+</label>
          </li>
          <li className="gap-1 flex ">
            <input
              type="checkbox"
              name="priceFilter"
              id="priceFilter8"
              className="px-2"
              onChange={() => handleFilterChange(800)}
              disabled={selectedFilter !== "" && selectedFilter !== "800"}
            />
            <label htmlFor="priceFilter8">Rs.800+</label>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Filter;
