"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="flex justify-between lg:px-36 px-7 h-28 items-center font-mono">
      <Link
        href="/"
        className="text-xl hover:text-theme-primary-accentColor font-semibold"
      >
        pluffy.dev
      </Link>

      <div className="relative inline-block md:hidden">
        <button onClick={() => setDropdown(!dropdown)}>
          <RxHamburgerMenu size={30} />
        </button>

        {dropdown && (
          <div
            onClick={() => setDropdown(!dropdown)}
            className="top-0 left-0 fixed w-screen h-screen"
          ></div>
        )}

        {dropdown && (
          <div className="w-36 bg-[#1A1A1A] absolute -ml-28 text-right lg:hidden rounded-md">
            <NavLinks />
          </div>
        )}
      </div>

      <ul className="hidden text-lg md:block">
        <NavLinks />
      </ul>
    </div>
  );
};

export default Navbar;
