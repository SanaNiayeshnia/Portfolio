"use client";
import Image from "next/image";
import Link from "next/link";

/**
 *
 * @param {object} props - Components props
 * @param {string} [props.href] - An href if you want a reference button
 * @param {()=>void} [props.onClick] - An event handler for clicking on button
 * @param {string} [props.className] - Extra class names
 * @param {boolean} [props.withDoodle] - A flag for displaying a doodle next to the button
 * @param {"primary"|"secondary"} [props.variant] - The button variant
 * @param {React.ReactNode} [props.children] - The button content
 * @returns {JSX.Element} a custom reusable button
 */

function CustomButton({
  href = "",
  onClick,
  className = "",
  withDoodle = false,
  variant = "primary",
  children,
  ...rest
}) {
  return (
    <div
      className={`relative w-max rounded-full  group transition-all duration-300 border-3 cursor-pointer font-semibold ${
        variant === "primary"
          ? "active:bg-amber-200 hover:bg-amber-200 bg-sky-200"
          : "bg-pink-200 active:bg-green-200 hover:bg-green-200"
      }  ${className}`}
    >
      {href ? (
        <Link href={href} {...rest}>
          <p className="py-3 px-5">{children}</p>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className="cursor-pointer py-3 px-5"
          {...rest}
        >
          {children}
        </button>
      )}
      {withDoodle && (
        <Image
          src="/images/doodles/doodle4.png"
          alt="doodle"
          width="30"
          height="30"
          className={`absolute -bottom-3  transition-all duration-300  ${
            variant === "primary"
              ? "-right-6 group-hover:scale-110"
              : "-left-6 -scale-x-100 group-hover:-scale-x-110 scale-y-110"
          }`}
        />
      )}
    </div>
  );
}

export default CustomButton;
