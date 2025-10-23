"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hightlighter from "../Hightlighter";

function NavItem({ item }) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={item?.href}
        className={`py-2 px-2 w-max group transition-all duration-300 ${
          pathname !== item?.href ? "cursor-pointer " : ""
        } `}
      >
        <span
          className={`relative border-b-3 border-transparent  transition-all duration-300 ${
            pathname !== item?.href ? "group-hover:border-amber-200" : ""
          }`}
        >
          {item?.name}
          {pathname === item?.href && <Hightlighter className="bg-amber-200" />}
        </span>
      </Link>
    </li>
  );
}

export default NavItem;
