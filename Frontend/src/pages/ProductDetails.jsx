import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

function ProductDetails() {
  const location = useLocation();
  const dispatch = useDispatch();
  const sizeSelectMessage = () => toast("Select a size");
  const productDetails = location.state.productDetails;
  let {
    additionalImageUrls,
    imageUrl,
    name,
    price,
    availableSizes,
    reviews,
    rating
  } = productDetails;
  const [toggleReviews, setToggleReviews] = useState(false);
  const [selectedSize, setSelectedSize] = useState(false);

  const handleSelectSize = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = async () => {
    if (!selectedSize) {
      sizeSelectMessage();
      return;
    }
    try {
      const updatedProduct = { ...productDetails, purchaseSize: selectedSize };
      dispatch(addToCart({ ...updatedProduct, updatedProduct }));
    } catch (error) {
      console.log(error);
      if (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className="flex relative lg:p-10 p-2">
      <ToastContainer />
      <div className="flex lg:flex-row flex-col gap-5  w-full">
        <div className="flex p-1 lg:w-3/5 w-full gap-3 max-h-screen realtive">
          <div className="flex flex-col gap-4 mt-5 lg:block hidden">
            {additionalImageUrls.map((productImage) => (
              <div className="h-fit w-fit">
                <img
                  src={`https://${productImage}`}
                  className="max-h-28"
                  alt=""
                  srcSet=""
                />
              </div>
            ))}
          </div>
          <div className="bg-gray-100 lg:p-5 w-full">
            <img
              src={`https://${imageUrl}`}
              className="h-full max-h-screen w-full"
              alt=""
            />
          </div>
        </div>
        {/* image displaying end here */}
        <div className=" lg:w-3/5 w-full flex flex-col gap-5 lg:px-10 ">
          {/* header */}
          <div className="relative flex flex-col w-full items-center text-center lg:text-start lg:items-start gap-0">
            <h2 className="lg:text-2xl text-normal tracking-wide  font-jost uppercase">
              {name}
            </h2>
            <p className="font-jost font-base tracking-wide">
              {price.current.text}
            </p>
            <p className="font-jost font-base tracking-wide">
              (incl. of all taxes)
            </p>
          </div>
          {/* Offers and Coupons */}
          <div className="flex flex-col gap-2">
            <div className="">
              <p className="flex gap-1 text-xs font-jost font-base">
                Get this for <b>Rs. 1,079</b>{" "}
              </p>
              <p className="flex gap-1 text-xs font-jost font-base">
                Buy 2 & Get Flat 10% Off! Code: <b>BUY2</b>{" "}
              </p>
            </div>
            <div className="">
              <p className="flex gap-1 text-xs font-jost font-base">
                Get this for <b>Rs. 959</b>{" "}
              </p>
              <p className="flex gap-1 text-xs font-jost font-base">
                Buy 5 & Get Flat 20% Off! Code: <b>BUY5</b>{" "}
              </p>
            </div>
            <div className="">
              <p className="flex gap-1 text-xs font-jost font-base">
                Get this for <b> Rs. 959</b>
              </p>
              <p className="flex gap-1 text-xs font-jost font-base">
                Flat 15% Off on minimum purchase of 2699/-
              </p>
              <p className="flex gap-1 text-xs font-jost font-base">
                Code: <b>FLAT20</b>
              </p>
            </div>
          </div>
          {/* Sizes and colors */}
          <div className="w-fit flex flex-col gap-3">
            <div className="">
              <img
                src={`https://${imageUrl}`}
                className="w-12 rounded-lg cursor-pointer"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-jost uppercase tracking-widest">
                {selectedSize ? `size ${selectedSize}` : "select a size"}
              </h1>
              <div className="flex  gap-2">
                {availableSizes.map((size) => (
                  <button
                    onClick={() => handleSelectSize(size)}
                    className={`border outline-none h-8 w-7 text-sm font-jost font-base flex items-center text-center justify-center rounded-lg cursor-pointer ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : " border-gray-100"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* buttons */}
          <div className="flex text-center">
            <button
              // disabled={!selectedSize}
              onClick={handleAddToCart}
              className={`border border-slate-100 w-full py-3 uppercase font-jost text-sm tracking-widest cursor-pointer font-medium ${
                selectedSize
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-400 "
              }`}
            >
              {selectedSize ? "add to bag" : "select a size"}
            </button>
          </div>
          {/* reviews*/}
          <div className="reviews border rounded border-slate-100 p-2 flex flex-col gap-1 h-fit max-h-72 overflow-y-scroll">
            <h1
              className="uppercase font-jost text-sm tracking-widest flex items-center gap-1 w-fit pr-3 mb-2 cursor-pointer"
              onClick={() => setToggleReviews(!toggleReviews)}
            >
              reviews
              <span>
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

            {toggleReviews && (
              <div className="flex flex-col gap-4">
                {reviews.map((productReview) => (
                  <div className="flex flex-col items-start gap-1">
                    <div className="flex itemse-center gap-1 ">
                      <img
                        src=""
                        className="h-10 w-10 border rounded-full "
                        alt=""
                      />
                      <div className="">
                        <p className="text-sm font-jost tracking-wide">
                          {productReview.username}
                        </p>
                        <p className="text-sm font-jost tracking-wide -mt-1">
                          {productReview.date}
                        </p>
                      </div>
                    </div>
                    <div className="ml-10 -mt-2 flex flex-col gap-1">
                      <p className="text-medium font-jost">
                        {productReview.reviewTitle}
                      </p>
                      <p className="text-sm -mt-1 font-jost">
                        {productReview.reviewText}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Right side end here */}
      </div>
    </section>
  );
}

export default ProductDetails;
