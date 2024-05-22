import React from "react";
import {
  CategoryFilter,
  PriceFilter,
  ColorFilter,
  SizeFilter
} from "../../exports";
function Filter({ handleChange }) {
  return (
    <div className="flex flex-col gap-5">
      <CategoryFilter handleChange={handleChange} />
      <PriceFilter handleChange={handleChange} />
      <ColorFilter handleChange={handleChange} />
      <SizeFilter handleChange={handleChange} />
    </div>
  );
}

export default Filter;
