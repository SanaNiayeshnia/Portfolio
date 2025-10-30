"use client";
import Image from "next/image";
import Link from "next/link";

function Button({
  href = "",
  onClick,
  className = "",
  withDoodle = false,
  varient = "primary",
  children,
  ...rest
}) {
  return (
    <div
      className={`relative w-max rounded-full  group transition-all duration-300 border-3 cursor-pointer font-semibold ${
        varient === "primary"
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
            varient === "primary"
              ? "-right-6 group-hover:scale-110"
              : "-left-6 -scale-x-100 group-hover:-scale-x-110 scale-y-110"
          }`}
        />
      )}
    </div>
  );
}

export default Button;
