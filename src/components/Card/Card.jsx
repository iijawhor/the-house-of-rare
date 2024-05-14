import React from "react";

function Card({
  productName,
  productSize = [],
  productPrice,
  productCategory,
  productImage
}) {
  return (
    <div className="w-auto h-full relative flex flex-col gap-1 md:gap-3">
      <img
        src={`https://${productImage}`}
        alt=""
        srcset=""
        className=" min-h-28 md:h-full w-full"
      />
      <div className="relative flex flex-col gap-1">
        <p className="md:block hidden font-jost text-wrap uppercase text-xs tracking-widest font-extralight text-white">
          {productName}
        </p>
        <p className="font-jost text-xs tracking-wide font-light">
          {productPrice}
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {productSize.map((size) => (
            <span className="md:block text-xs hidden font-jost tracking-wide font-light uppercase">
              {size}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
