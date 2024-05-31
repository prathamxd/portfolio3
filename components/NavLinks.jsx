import Link from "next/link";
import React from "react";

const NavLinks = () => {
  const links = [
    { text: "/About", href: "/about" },
    { text: "/Work", href: "/work" },
    { text: "/Contact", href: "/contact" },
  ];

  return (
    <div className="flex items-end justify-center md:flex-row flex-col md:gap-10">
      {links.map((v) => {
        return (
          <Link
            key={v.href}
            href={v.href}
            className="px-2 py-4 w-full  hover:text-theme-primary-accentColor"
          >
            <p className="text-nowrap">{v.text}</p>
          </Link>
        );
      })}
      <Link
        target="_self"
        className="px-2 py-4 w-full hover:text-theme-primary-accentColor"
        href="https://drive.google.com/file/d/1LHXjdfDc5yvvy08gRKB8pbVQqIGEsJVK/view?usp=sharing"
      >
        <p className="text-nowrap">/Resume</p>
      </Link>
    </div>
  );
};

export default NavLinks;
