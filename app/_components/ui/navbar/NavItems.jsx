import NavItem from "./NavItem";
const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Hire Me //", href: "/hire me" },
];

function NavItems() {
  return (
    <ul className="flex flex-col gap-3 sm:gap-0 sm:flex-row sm:items-center font-medium sm:divide-x-3 !divide-black">
      {navItems?.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </ul>
  );
}

export default NavItems;
