import { TbMenu2 } from "react-icons/tb";
import Logo from "../Logo";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";
import NavItems from "./NavItems";

function Navbar() {
  return (
    <div className="flex fixed top-5 left-4 right-4 sm:left-auto sm:right-1/2 sm:translate-x-1/2 bg-white shadow-strict  items-center gap-8 justify-between border-3 border-black sm:w-max z-20">
      <Logo />
      <div className="hidden sm:block">
        <NavItems />
      </div>
      <Sheet>
        <SheetTrigger className="sm:hidden p-2 cursor-pointer group">
          <TbMenu2 className="text-2xl group-hover:scale-110 transition-all duration-300 group-active:scale-110" />
        </SheetTrigger>
        <SheetContent className="border-none">
          <SheetHeader>
            <SheetTitle className="text-lg">Sana's Portfolio</SheetTitle>
          </SheetHeader>
          <div className="px-4">
            <NavItems />
          </div>
          <SheetFooter>
            <p className="text-center font-caveat text-xl font-medium">
              You found the secret spot!
            </p>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <div className="size-2 border-black shadow-strict border-2 absolute bg-white -top-1.5 -left-1.5"></div>
      <div className="size-2 border-black border-2 absolute bg-white -top-1.5 -right-1.5"></div>
      <div className="size-2 border-black shadow-strict border-2 absolute bg-white -bottom-1.5 -left-1.5"></div>
      <div className="size-2 border-black shadow-strict border-2 absolute bg-white -bottom-1.5 -right-1.5"></div>
    </div>
  );
}

export default Navbar;
