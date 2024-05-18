import React, { useState } from "react";
import { Input } from "../../exports";
function SizeFilter({ handleChange }) {
  const sizes = [
    { size: "s", id: 1 },
    { size: "m", id: 2 },
    { size: "x", id: 3 },
    { size: "l", id: 4 },
    { size: "xl", id: 5 }
  ];

  const [toggleSizes, seToggleSizes] = useState(true);

  return (
    <div className="flex items-start">
      <div className="w-full flex flex-col gap-2 items-start">
        <h1 className="text-sm text-black font-jost tracking-widest flex items-center text-center gap-2 font-base">
          Sizes
          <span
            className="cursor-pointer"
            onClick={() => seToggleSizes(!toggleSizes)}
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
        {toggleSizes && (
          <div className="flex flex-col gap-2 w-full items-start">
            {sizes.map((size) => (
              <Input
                type="checkbox"
                className="cursor-pointer appearance-none w-4 h-4 border border-black rounded-sm bg-white
                mt-1 shrink-0
               checked:bg-black checked:border-0"
                labelName={size.size}
                onChange={handleChange}
                value={size.size}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SizeFilter;
