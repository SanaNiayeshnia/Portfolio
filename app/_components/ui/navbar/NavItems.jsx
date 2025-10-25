"use client";
import NavItem from "./NavItem";
import {
  PiShootingStarFill,
  PiPaletteFill,
  PiStarFourFill,
  PiButterflyFill,
} from "react-icons/pi";

const navItems = [
  { name: "Home", href: "/", icon: PiStarFourFill },
  { name: "Projects", href: "/projects", icon: PiPaletteFill },
  { name: "About", href: "/about", icon: PiButterflyFill },
  { name: "Hire Me //", href: "/hire-me", icon: PiShootingStarFill },
];

function NavItems() {
  return (
    <ul className="flex flex-col gap-3 sm:gap-0 sm:flex-row sm:items-center font-medium sm:divide-x-3 !divide-black">
      {navItems?.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </ul>
  );
}

export default NavItems;
