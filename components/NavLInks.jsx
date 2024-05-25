import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <div className="flex md:flex-row flex-col md:gap-10 gap-8">
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
  );
};

export default NavLinks;
