import React from "react";
import { useLocation } from "react-router-dom";

function Products() {
  const location = useLocation();
  const data = location.state.allProducts;

  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}

export default Products;