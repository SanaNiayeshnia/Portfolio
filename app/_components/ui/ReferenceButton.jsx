import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";

/**
 * @param {object} props - Component properties
 * @param {React.ReactNode} props.children - Content of the button
 * @param {string} props.href - The link url
 * @param {string} props.className - Component className
 * @param {"_blank" | "_self"| "_top" |"_parrent"} [props.target='_blank'] - Target of the link
 */

export default function ReferenceButton({
  href = "",
  className = "",
  target = "_self",
  children,
}) {
  return (
    <Link
      target={target}
      href={href}
      className={`text-2xl flex items-center gap-2 bg-black border-2 border-black rounded active:bg-amber-200 active:text-black hover:bg-amber-200 hover:text-black  transition-all duration-300 text-white shadow-strict ${className}`}
    >
      <TbArrowUpRight />
      {children}
    </Link>
  );
}
