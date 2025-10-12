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
      <div className="px-12 py-6 mx-auto max-w-7xl grid grid-cols-3 items-center gap-4 justify-between border-l-3">
        <Logo />
        <p className="text-center font-medium">Developed in 2024</p>
        <div className="flex gap-3 items-center justify-end [&_svg]:text-2xl">
          {socialMedias?.map((socialMedia) => (
            <Link
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
