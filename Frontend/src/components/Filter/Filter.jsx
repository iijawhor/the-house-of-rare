import React from "react";
import "./Filter.css";
import {
  CategoryFilter,
  PriceFilter,
  ColorFilter,
  SizeFilter
} from "../../exports";
function Filter({ handleChange, className }) {
  return (
    <div
      className={`filter flex flex-col gap-5 h-screen pb-5 overflow-y-scroll px-2 ${className}`}
    >
      <CategoryFilter handleChange={handleChange} />
      <hr />
      <PriceFilter handleChange={handleChange} />
      <hr />
      <ColorFilter handleChange={handleChange} />
      <hr />
      <SizeFilter handleChange={handleChange} />
    </div>
  );
}

export default Filter;
