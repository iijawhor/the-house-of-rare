import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Card,
  data,
  CategoryFilter,
  PriceFilter,
  ColorFilter,
  SizeFilter,
  Filter
} from "../../exports";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../features/productSlice";
function Products() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allProducts = location.state.allProducts;
  const [toggleFilters, setToggleFilters] = useState(false);
  useEffect(() => {
    dispatch(addProducts(data.products));
  }, []);
  const allProduct = useSelector((state) => state.products.products);
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
    // setFilteredProducts(filterData);
    dispatch(addProducts(filterData));
  };

  const handleFilter = (category) => {
    let products = data.products;
    if (category) {
      let filteredItems = products.filter((product) => {
        return product.category === category;
      });
      products = filteredItems;
      // setFilteredProducts(products);
      dispatch(addProducts(products));
    }
  };

  const handleNavigate = (id, product) => {
    navigate(`/product-details/:${id}`, { state: { productDetails: product } });
  };

  return (
    <section className="relative  pb-10 ">
      <div className="relative justify-between  flex gap-8 m-auto lg:w-10/12">
        <div className="w-1/4 flex flex-col pt-20 gap-2 lg:block hidden px-2">
          <Filter handleChange={handleChange} className="pt-20" />
        </div>

        <div className="w-full flex flex-col lg:gap-6 gap-3 pt-20 pb-5 relative right-0">
          {/* toggle filter */}
          <div className="lg:hidden block px-2">
            <div className="" onClick={() => setToggleFilters(!toggleFilters)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
            </div>
            {/* toggle filter */}
            {toggleFilters && (
              <div className="w-72 top-0 fixed bg-white z-50">
                <span
                  onClick={() => setToggleFilters(!toggleFilters)}
                  className="absolute right-8 top-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </span>
                <Filter handleChange={handleChange} className="pt-5" />
              </div>
            )}
          </div>

          <div className="flex justify-between items-center px-2">
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
              className="text-black capitalize tracking-wide md:text-sm font-jost font-base border border-black lg:py-1.5 lg:w-40 px-3 py-0.5"
            >
              Curated for you
            </button>
          </div>
          <div className="relative flex items-center px-2">
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
              {allProduct.map((product) => (
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
