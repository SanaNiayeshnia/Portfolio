"use client";

import Image from "next/image";
import Hightlighter from "./ui/Hightlighter";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";

function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Hire Me //", href: "/hire me" },
  ];

  return (
    <div className="flex sticky top-5 bg-white shadow-strict  items-center gap-8 justify-between border-3 w-max mx-auto z-20">
      <Logo />
      <ul className="flex items-center font-medium divide-x-3 !divide-black">
        {navItems?.map((item, index) => (
          <li
            key={index}
            className={`py-2 px-2 group transition-all duration-300 ${
              pathname !== item?.href ? "cursor-pointer " : ""
            } `}
          >
            <p
              className={`relative border-b-3 border-transparent  transition-all duration-300 ${
                pathname !== item?.href ? "group-hover:border-amber-200" : ""
              }`}
            >
              {item?.name}
              {pathname === item?.href && (
                <Hightlighter className="bg-amber-200" />
              )}
            </p>
          </li>
        ))}
      </ul>
      <div className="size-2 shadow-strict border-2 absolute bg-white -top-1.5 -left-1.5"></div>
      <div className="size-2 border-2 absolute bg-white -top-1.5 -right-1.5"></div>
      <div className="size-2 shadow-strict border-2 absolute bg-white -bottom-1.5 -left-1.5"></div>
      <div className="size-2 shadow-strict border-2 absolute bg-white -bottom-1.5 -right-1.5"></div>
    </div>
  );
}

export default Navbar;
