import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-36 h-28 items-center font-mono">
      <Link href="/" className="text-xl hover:text-theme-primary-accentColor font-semibold">
        pluffy.dev
      </Link>
      <div className="space-x-10 text-lg">
        <Link href="/about" className="hover:text-theme-primary-accentColor">
          /About
        </Link>
        <Link href="/work" className="hover:text-theme-primary-accentColor">
          /Work
        </Link>
        <Link href="/contact" className="hover:text-theme-primary-accentColor">
          /Contact
        </Link>
        <a
          target="_blank"
          className="hover:text-theme-primary-accentColor"
          href="https://drive.google.com/file/d/1LHXjdfDc5yvvy08gRKB8pbVQqIGEsJVK/view?usp=sharing"
        >
          /Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
