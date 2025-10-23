import Link from "next/link";
import { usePathname } from "next/navigation";
import HighLighter from "../Highlighter";

function NavItem({ item }) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={item?.href}
        className={`py-2 px-2 w-max group transition-all duration-300  flex items-center gap-2 ${
          pathname !== item?.href ? "cursor-pointer " : ""
        } `}
      >
        <item.icon className={`text-xl sm:hidden`} />
        <span
          className={`relative transition-all  duration-300  border-b-3 border-transparent ${
            pathname !== item?.href ? "group-hover:border-amber-200" : ""
          }`}
        >
          {item?.name}
          {pathname === item?.href && <HighLighter className="bg-amber-200" />}
        </span>
      </Link>
    </li>
  );
}

export default NavItem;
