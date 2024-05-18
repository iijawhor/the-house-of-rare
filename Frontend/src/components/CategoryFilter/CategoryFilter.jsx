import React, { useState } from "react";
import { Input } from "../../exports";
function CategoryFilter({ handleChange }) {
  const categories = [
    { name: "shoes", id: 1 },
    { name: "shirts", id: 2 },
    { name: "t-shirts", id: 3 },
    { name: "jackets", id: 4 },
    { name: "shorts", id: 5 },
    { name: "sneakers", id: 6 },
    {
      name: "overshirts",
      id: 7
    },

    { name: "sweaters", id: 8 },
    {
      name: "boots",
      id: 9
    },
    { name: "jeans", id: 10 },
    { name: "caps", id: 11 },
    { name: "pants", id: 12 }
  ];

  const [toggleCategory, setToggleCategory] = useState(true);

  return (
    <div className="flex items-start">
      <div className="w-full flex flex-col gap-2 items-start">
        <h1 className="text-sm text-black font-jost tracking-widest flex items-center text-center gap-2 font-base">
          Collections
          <span
            className="cursor-pointer"
            onClick={() => setToggleCategory(!toggleCategory)}
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
        {toggleCategory && (
          <div className="flex flex-col gap-2 w-full items-start">
            {categories.map((category) => (
              <Input
                type="checkbox"
                className="cursor-pointer  appearance-none w-4 h-4 border border-black rounded-sm bg-white
                mt-1 shrink-0
               checked:bg-black checked:border-0"
                labelName={category.name}
                onChange={handleChange}
                value={category.name}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryFilter;
