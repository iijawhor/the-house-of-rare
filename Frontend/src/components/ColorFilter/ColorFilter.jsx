import React, { useState } from "react";
import { Input } from "../../exports";
function ColorFilter({ handleChange }) {
  const colors = [
    { color: "black", id: 1 },
    { color: "navy", id: 2 },
    { color: "beige", id: 3 },
    { color: "pink", id: 4 },
    { color: "sky", id: 5 },
    { color: "white", id: 6 }
  ];

  const [toggleColor, setToggleColor] = useState(true);

  return (
    <div className="flex items-start">
      <div className="w-full flex flex-col gap-2 items-start">
        <h1 className="text-sm text-black font-jost tracking-widest flex items-center text-center gap-2 font-base">
          Colors
          <span
            className="cursor-pointer"
            onClick={() => setToggleColor(!toggleColor)}
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
        {toggleColor && (
          <div className="flex flex-col gap-2 w-full items-start">
            {colors.map((color) => (
              <Input
                type="checkbox"
                className="cursor-pointer  appearance-none w-4 h-4 border border-black rounded-sm bg-white
                mt-1 shrink-0
               checked:bg-black checked:border-0"
                labelName={color.color}
                onChange={handleChange}
                value={color.color}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ColorFilter;
