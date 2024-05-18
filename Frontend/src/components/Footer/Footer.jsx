import React from "react";
import {
  XIcon,
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon
} from "../../exports";
function Footer() {
  return (
    <section className="flex relative px-10 border-t-2 border-gray-800 h-fit md:h-72 py-10 bg-black">
      <div className="flex w-full flex-wrap justify-between items-center md:gap-auto md:gap-0 gap-5 ">
        <div className="flex flex-col gap-2">
          <p className="text-base font-jost font-light tracking-widest text-white uppercase">
            The House Of Rare
          </p>
          <div className=" flex gap-3 items-center text-white">
            <XIcon className="cursor-pointer" />
            <LinkedInIcon className="cursor-pointer" />
            <InstagramIcon className="cursor-pointer" />
            <FacebookIcon className="cursor-pointer" />
          </div>
        </div>
        <div className="">
          <ul className="flex flex-col gap-2 text-sm uppercase tracking-widest font-extralight">
            <h1 className="text-xs font-bold text-gray-300 uppercase">
              Support
            </h1>
            <li className="text-xs uppercase tracking-widest font-light text-slate-300">
              Contact Us
            </li>
            <li className="text-xs uppercase tracking-widest font-light text-slate-300">
              FAQ
            </li>
            <li className="text-xs uppercase tracking-widest font-light text-slate-300">
              Downloads
            </li>
            <li className="text-xs uppercase tracking-widest font-light text-slate-300">
              Local Dealer
            </li>
            <li className="text-xs uppercase tracking-widest font-light text-slate-300">
              Local Retailers
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col gap-2">
            <h1 className="text-xs font-bold text-gray-300 uppercase">
              The House Of Rare
            </h1>
            <li className="text-xs uppercase tracking-widest font-light text-slate-300">
              Designs
            </li>
            <li className="text-xs uppercase tracking-widest font-light text-slate-300">
              Careers
            </li>
            <li className="text-xs uppercase tracking-widest font-light text-slate-300">
              Newsroom
            </li>
            <li className="text-xs uppercase tracking-widest font-light text-slate-300">
              Local Dealer
            </li>
            <li className="text-xs uppercase tracking-widest font-light text-slate-300">
              Local Retailers
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col gap-2">
            <h1 className="text-xs font-bold text-gray-300 uppercase">
              Support
            </h1>
            <p className="text-xs capitalize normal-case tracking-wide font-light text-slate-300">
              Stay up to date on the latest form us
            </p>
            <form action="" className="flex gap-2">
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="border-none outline-none px-2 py-1 rounded text-sm text-black tracking-wide"
                />
              </div>
              <button className="normal-case tracking-wide text-xs border px-2 rounded cursor-pointer">
                Sign Up
              </button>
            </form>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
