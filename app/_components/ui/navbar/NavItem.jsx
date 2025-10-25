import Link from "next/link";
import { usePathname } from "next/navigation";
import HighLighter from "../Highlighter";

/**
 * @param {object} props - Component properties
 * @param {object} [props.item={}] -Item's object
 * @param {()=>void} props.onClick - On click event function
 */

function NavItem({ item = {}, onClick }) {
  const pathname = usePathname();

  return (
    <li onClick={onClick}>
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
