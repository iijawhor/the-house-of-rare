import React, { useState } from "react";

function Menu({ toggleMenu, setToggleMenu, handleNavigate }) {
  const menuItems = [
    {
      name: "new arrivals",
      id: 1,
      navigateTo: "/new-arrivals"
    },
    {
      name: "best selling",
      id: 2,
      navigateTo: "/best-selling"
    },
    {
      name: "rare luxe",
      id: 3,
      navigateTo: "/rare-luxe"
    },
    { name: "suits & blazers", id: 4, navigateTo: "/siuts-blazers" },
    { name: "shop", id: 5, navigateTo: "/shop" },
    { name: "track order", id: 6, navigateTo: "/track-order" },
    {
      name: "place a return / exchange request",
      id: 7,
      navigateTo: "/return-exchange"
    },
    { name: "customer support", id: 8, navigateTo: "/customer-support" }
  ];

  return (
    <section className="absolute z-50 w-fit p-3 w-80 h-screen bg-white text-black left-0 flex flex-col gap-3 ">
      <div className=" flex justify-between items-center border-b-2 py-3 border-slate-500">
        <div className="flex items-center gap-2 mb-2 cursor-pointer">
          <p className="border-2 border-black rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </p>
          <div className="flex flex-col gap-0">
            <h4 className="uppercase text-xs font-semibold tracking-widest ">
              my account
            </h4>
            <p className="-mt-0 text-xs border bg-black text-white p-1 rounded-lg text-center tracking-tight uppercase">
              rare coins 601
            </p>
          </div>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3">
        {menuItems.map((navigateLink) => (
          <li
            key={navigateLink.id}
            className="list-none font-normal text-normal font-jost uppercase tracking-widest  border-b-2 border-slate-600 py-2 w-full text-black cursor-pointer"
            onClick={() => handleNavigate(navigateLink.navigateTo)}
          >
            {navigateLink.name}
          </li>
        ))}
      </div>
    </section>
  );
}

export default Menu;
