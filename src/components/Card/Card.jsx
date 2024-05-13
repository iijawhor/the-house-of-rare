import React from "react";

function Card({
  productName,
  productSize = [],
  productPrice,
  productCategory,
  productImage
}) {
  const defaultImage =
    "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516257984-b1b4d707412e";
  return (
    <div className="w-full h-full relative flex flex-col gap-3">
      <img
        src={productImage || defaultImage}
        alt=""
        srcset=""
        className="max-h- min-h-60 md:h-full w-full"
      />
      <div className="relative flex flex-col gap-1">
        <p className="font-jost text-wrap uppercase text-xs tracking-widest font-extralight text-white">
          {productName}
        </p>
        <p className="font-jost tracking-wide font-light">{productPrice}</p>
        <div className="flex items-center gap-2 flex-wrap">
          {productSize.map((size) => (
            <span className="font-jost tracking-wide font-light uppercase text-sm">
              {size}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
