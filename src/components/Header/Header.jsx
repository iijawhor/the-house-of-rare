import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "../../exports";
function Header() {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const headerItems = [
    {
      name: "account",
      id: 1,
      navigateTo: "/profile",
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6  h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </>
      )
    },
    {
      name: "Search",
      id: 2,
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="md:w-6 w-5 md:h-6 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </>
      )
    },
    {
      name: "WishList",
      id: 3,
      navigateTo: "/wishlist",
      icon: (
        <>
          {wishlist.length > 0 ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </>
          )}
        </>
      )
    },
    {
      name: "Cart",
      id: 4,
      navigateTo: "/cart",
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </>
      )
    }
  ];
  const handleNavigate = (navigateTo) => {
    navigate(navigateTo);
  };
  return (
    <section className="fixed z-40 w-full border-b-2 border-gray-900 h-16 flex justify-center text-white">
      {toggleMenu && (
        <Menu
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          handleNavigate={handleNavigate}
        />
      )}
      <div className="flex items-center justify-between md:px-10 px-2 w-full">
        <div
          className="cursor-pointer flex flex-col gap-1"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className="h-0.5 w-7 bg-white rounded"></span>
          <span className="h-0.5 w-7 bg-white rounded"></span>
          <span className="h-0.5 w-7 bg-white rounded"></span>
        </div>
        <div>
          <h1 className="uppercase md:text-xl font-medium font-jost font-bold tracking-widest">
            The House Of Rare
          </h1>
        </div>
        <div>
          <div className="flex relative items-center gap-5">
            {headerItems.map((navLink) => (
              <li
                key={navLink.id}
                className={`relative list-none md:block cursor-pointer ${
                  navLink.id !== 2 ? "hidden" : "block"
                }`}
                onClick={() => handleNavigate(navLink.navigateTo)}
              >
                {navLink.icon}
                {navLink.id === 4 ? (
                  <p
                    className={`absolute -top-1 -right-2 border rounded-full h-4 w-4 text-xs text-center font-semibold bg-white text-black `}
                  >
                    {cartItems.length}
                  </p>
                ) : null}
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
