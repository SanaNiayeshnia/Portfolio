import Image from "next/image";
import Link from "next/link";

function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 py-2 px-2 shrink-0 ${className}`}
    >
      <Image
        src="/images/doodles/doodle20.png"
        alt="doodle"
        width="30"
        height="30"
      />
      <span className="font-semibold text-xl">Sana's Portfolio</span>
    </Link>
  );
}

export default Logo;
