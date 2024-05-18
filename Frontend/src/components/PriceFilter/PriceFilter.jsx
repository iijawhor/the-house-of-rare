import React, { useState } from "react";
import { data, Input } from "../../exports";

function PriceFilter({ handleChange }) {
  const priceRange = [
    {
      minPrice: "20",
      maxPrice: "40",
      id: 1
    },
    {
      minPrice: "41",
      maxPrice: "79",
      id: 2
    },
    {
      minPrice: "80",
      maxPrice: "120",
      id: 3
    },
    {
      minPrice: "121",
      maxPrice: "156",
      id: 4
    },
    {
      minPrice: "157",
      maxPrice: "199",
      id: 5
    },
    {
      minPrice: "200",
      maxPrice: "250",
      id: 6
    },
    {
      minPrice: "251",
      maxPrice: "349",
      id: 7
    },
    {
      minPrice: "350",
      maxPrice: "450",
      id: 8
    }
  ];
  const [togglePrice, setTogglePrice] = useState(true);

  return (
    <div className="flex items-start">
      <div className="w-full flex flex-col gap-2 items-start">
        <h1 className="text-sm text-black font-jost tracking-widest flex items-center text-center gap-2 font-base">
          Price ($)
          <span
            className="cursor-pointer"
            togglePrice
            onClick={() => setTogglePrice(!togglePrice)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </h1>
        {togglePrice && (
          <div className="flex flex-col gap-2 w-full items-start">
            {priceRange.map((price) => (
              <Input
                type="checkbox"
                className="cursor-pointer  appearance-none w-4 h-4 border border-black rounded-sm bg-white
                mt-1 shrink-0
               checked:bg-black checked:border-0"
                labelName={price.minPrice + " - " + price.maxPrice}
                onChange={handleChange}
                value={[price.minPrice, price.maxPrice]}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PriceFilter;
