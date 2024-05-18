import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Card,
  data,
  CategoryFilter,
  PriceFilter,
  ColorFilter,
  SizeFilter
} from "../../exports";
function Products() {
  const location = useLocation();
  const navigate = useNavigate();
  const allProducts = location.state.allProducts;
  const gridView = [
    {
      name: "gridTwo",
      id: 1,
      grid: 2,
      grids: [
        {
          id: 101,
          content: ""
        },
        {
          id: 102,
          content: ""
        }
      ]
    },
    {
      name: "gridThree",
      id: 2,
      grid: 3,
      grids: [
        {
          id: 201,
          content: ""
        },
        {
          id: 202,
          content: ""
        },
        {
          id: 203,
          content: ""
        }
      ]
    },
    {
      name: "gridFour",
      id: 3,
      grid: 4,
      grids: [
        {
          id: 301,
          content: ""
        },
        {
          id: 302,
          content: ""
        },
        {
          id: 303,
          content: ""
        },
        {
          id: 304,
          content: ""
        }
      ]
    }
  ];
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const [activeGrid, setActiveGrid] = useState(4);
  const handleGrid = (grid) => {
    setActiveGrid(grid);
    console.log(grid, activeGrid);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    handleFilter(value);
    console.log("value", value);
  };

  const handleButtonFilter = () => {
    const filterData = data.products.map((product) => {
      return product;
    });
    setFilteredProducts(filterData);
  };

  const handleFilter = (category) => {
    let products = allProducts;
    if (category) {
      let filteredItems = products.filter((product) => {
        return product.category === category;
      });
      products = filteredItems;
      setFilteredProducts(products);
    } else {
      console.log("category not present", category);
    }
  };
  const handleNavigate = (id, product) => {
    navigate(`/product-details/:${id}`, { state: { productDetails: product } });
  };

  return (
    <section className="relative px-2 pb-10 pt-5">
      <div className="relative justify-between flex gap-8 m-auto w-10/12">
        <div className="w-1/4 flex flex-col gap-2">
          <CategoryFilter handleChange={handleChange} />
          <PriceFilter handleChange={handleChange} />
          <ColorFilter handleChange={handleChange} />
          <SizeFilter handleChange={handleChange} />
        </div>
        <div className="w-full flex flex-col gap-6 relative right-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 p-0.5">
              <p className="text-sm font-base text-black font-jost tracking-widest">
                View As
              </p>
              {gridView.map((gridView) => (
                <button
                  className={`flex gap-0.5 block h-fit w-fit items-center relative border  p-0.5 cursor-pointer ${
                    activeGrid === gridView.grid
                      ? "border-black"
                      : "border-gray-400 "
                  } ${gridView.grid === 4 ? "hidden md:flex" : ""}  `}
                  onClick={() => handleGrid(gridView.grid)}
                >
                  {gridView.grids.map((grid) => (
                    <span
                      className={`relaive h-5 w-1 ${
                        activeGrid === gridView.grid
                          ? "bg-black"
                          : "bg-gray-400"
                      } `}
                    >
                      {grid.content}
                    </span>
                  ))}
                </button>
              ))}
            </div>
            <button
              onClick={handleButtonFilter}
              className="text-black capitalize tracking-wide text-sm font-jost font-base border border-black py-2 w-40"
            >
              Curated for you
            </button>
          </div>
          <div className="relative flex items-center">
            <div
              className={`grid md:gap-6 md:gap-y-10 gap-1 items-center grid-cols-${activeGrid}`}
              // className={`grid gap-6 gap-y-10 items-center ${
              //   productView === 2
              //     ? "grid-cols-2"
              //     : "" || productView === 3
              //     ? "grid-cols-3"
              //     : "" || productView === 4
              //     ? "grid-cols-4"
              //     : ""
              // }`}
            >
              {filteredProducts.map((product) => (
                <div
                  className="w-full md:h-auto cursor-pointer"
                  onClick={() => handleNavigate(product.id, product)}
                >
                  <Card
                    productName={product.name}
                    productImage={product.imageUrl}
                    productPrice={product.price.current.text}
                    productSize={product.availableSizes}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
