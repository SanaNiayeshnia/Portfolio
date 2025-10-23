"use client";
import Image from "next/image";
import Link from "next/link";

function Button({
  href = "",
  onClick,
  className = "",
  withDoodle = false,
  children,
}) {
  return (
    <div
      className={`relative w-max rounded-full active:bg-amber-200 hover:bg-amber-200 group transition-all duration-300 border-3 cursor-pointer font-semibold bg-sky-200 ${className}`}
    >
      {href ? (
        <Link href={href}>
          <p className="py-3 px-5">{children}</p>
        </Link>
      ) : (
        <button onClick={onClick} className="cursor-pointer py-3 px-5">
          {children}
        </button>
      )}
      {withDoodle && (
        <Image
          src="/images/doodles/doodle4.png"
          alt="doodle"
          width="30"
          height="30"
          className="absolute -bottom-3 -right-6 transition-all duration-300 group-hover:scale-110"
        />
      )}
    </div>
  );
}

export default Button;
