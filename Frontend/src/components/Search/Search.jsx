import React, { useState } from "react";
import { Input, data } from "../../exports";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../features/productSlice";
function Search({
  searchQuery,
  setSearchQuery,
  setToggleSearchbar,
  toggleSearchbar
}) {
  const dispatch = useDispatch();
  const { products } = data;
  const handleSearch = (e) => {
    e.preventDefault();
    const filteredProducts = products.filter(
      ({ name, category, brandName, description }) =>
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    dispatch(addProducts(filteredProducts));
  };

  return (
    <form action="" className="" onSubmit={handleSearch}>
      <div className="flex border-none rounded px-3 items-center z-50 bg-gray-100">
        <Input
          className="py-1.5 text-start w-72 bg-gray-100 border-none tracking-wide font-jost "
          placeholder="Enter query"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <li className="relative list-none text-gray-300 md:block cursor-pointer border-l-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:w-6 w-5 md:h-6 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
        </li>
      </div>
      <button type="submit"></button>
    </form>
  );
}

export default Search;
