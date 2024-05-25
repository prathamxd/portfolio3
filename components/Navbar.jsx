"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLinks from "./NavLInks";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="flex justify-between md:px-36 px-7 h-28 items-center font-mono">
      <Link
        href="/"
        className="text-xl hover:text-theme-primary-accentColor font-semibold"
      >
        pluffy.dev
      </Link>

      {window.screen.width < 1000 && (
        <div className="relative inline-block md:hidden">
          <button onClick={() => setDropdown(!dropdown)}>
            <RxHamburgerMenu size={30} />
          </button>

          {dropdown && (
            <div className=" w-36 h-56 bg-[#1A1A1A] p-3 absolute -ml-28 mt-2 text-right lg:hidden rounded-md">
              <NavLinks />
            </div>
          )}
        </div>
      )}

      <ul className="hidden text-lg lg:block">
        <NavLinks />
      </ul>
    </div>
  );
};

export default Navbar;

//                className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold "
