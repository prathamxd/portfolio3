import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-36 h-20 items-center">
      <Link href="/" className="text-xl">pluffy.dev</Link>
      <div className="space-x-10 text-lg">
        <Link href="/about">/About</Link>
        <Link href="/work">/Work</Link>
        <Link href="/contact">/Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
