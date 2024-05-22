import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Bag.css";
import {
  removeItem,
  updateCartAmounts,
  calculateTotal
} from "../../features/cartSlice";
function Bag() {
  const amount = useSelector((state) => state.cart.amount);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const handleRemoveFromBag = (id) => {
    console.log("Button Clicked");
    dispatch(removeItem(id));
    dispatch(updateCartAmounts(id));
    // dispatch(calculateTotal(id));
  };
  return (
    <section className="relative my-5 p-2">
      <div className="relative md:flex gap-24 justify-between items-start  md:w-4/5 w-full m-auto px-1 py-5">
        {/* product details section */}
        <div className="w-full ">
          <div className="w-full mb-8">
            <h1 className="uppercase font-jost text-sm font-medium tracking-widest">
              shopping bag
              <span className=" font-semibold ml-2">
                &#40; {cartItems.length} &#41;
              </span>
            </h1>
          </div>
          {/* products in cart */}
          <div
            className={`productsInBag relative flex flex-col gap-5 p-2  overflow-y-auto ${
              cartItems.length <= 1 ? "h-fit" : "h-96"
            }`}
          >
            {cartItems.map((product) => (
              <div className="flex items-start gap-3">
                {/* image */}
                <div className="">
                  <img
                    src={`https://${product.imageUrl}`}
                    alt=""
                    className="h-28 max-w-72 min-w-60 object-cover"
                  />
                </div>
                {/* product details */}
                <div className="mr-5 font-medium">
                  <h2 className="uppercase text-sm tracking-widest font-jost">
                    {product.name}
                  </h2>
                  <p className="font-jost tracking-widest">
                    {product?.price?.current.text}
                  </p>
                  <p className="text-sm font-normal tracking-widest font-jost">
                    {" "}
                    Size :{" "}
                    <span className="font-medium">{product.purchaseSize}</span>
                  </p>
                  <div className="flex items-center gap-3 text-center">
                    <button
                      disabled={product.length <= 1}
                      className="text-lg font-medium"
                    >
                      &#45;
                    </button>
                    <span className="font-Cormorant font-semibold text-lg">
                      1
                    </span>
                    <button className="text-lg font-medium">&#43;</button>
                  </div>
                </div>
                {/* functions */}
                <div className="">
                  <button
                    onClick={() => handleRemoveFromBag(product.id)}
                    className="uppercase text-sm tracking-widest font-jost cursor-pointer hover:text-red-600"
                  >
                    remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* checkout section */}
        <div className="md:w-9/12 flex flex-col gap-10 ">
          {/* offers and sub total*/}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between py-3 border-b">
              <h1 className="uppercase text-xs font-jost tracking-widest font-medium">
                gift options
              </h1>
              <button className="font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <h1 className="uppercase text-xs font-jost tracking-widest font-medium">
                promo code
              </h1>
              <button className="font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <h1 className="uppercase text-xs font-jost tracking-widest font-medium">
                sub total
              </h1>
              <span className="text-sm font-jost tracking-wide font-medium">
                {total} {amount}
              </span>
            </div>
          </div>
          {/* payment process */}
          <div className="w-full flex flex-col gap-3">
            <button className="w-full bg-black text-white py-3 text-sm tracking-widest uppercase font-jost">
              checkout
            </button>
            {/* third party payment ooptions */}
            <div className="flex gap-2">
              <button className="w-full bg-purple-800 text-white py-3 text-sm tracking-widest uppercase font-jost">
                Phone pe
              </button>
              <button className="w-full bg-sky-500 text-white py-3 text-sm tracking-widest uppercase font-jost">
                Paytm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bag;
