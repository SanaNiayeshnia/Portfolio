import Link from "next/link";
import Logo from "./Logo";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  const socialMedias = [
    {
      icon: <SiLinkedin />,
      href: "https://www.linkedin.com/in/sana-niayeshnia",
    },
    { icon: <SiGithub />, href: "https://github.com/SanaNiayeshnia" },
  ];

  return (
    <footer className="border-t-3">
      <div className="px-10 md:px-12 py-4 md:py-6 mx-auto max-w-7xl place-items-center md:place-items-stretch grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4 justify-between xl:border-l-3">
        <Logo />
        <p className="flex justify-center items-center font-medium sm:col-span-2 md:col-span-1">
          Developed in 2024
        </p>
        <div className="flex gap-3 items-center justify-end [&_svg]:text-2xl sm:col-start-2 sm:row-start-1 md:col-start-3">
          {socialMedias?.map((socialMedia, index) => (
            <Link
              key={index}
              href={socialMedia?.href}
              className="transition-all duration-300 hover:scale-110"
              target="blank"
            >
              {socialMedia?.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
