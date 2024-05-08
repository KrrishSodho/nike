import Image from "next/image";
import Link from "next/link";

import { navLinks } from "@/constants.ts";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header className="padding-x py-8 z-10 w-full absolute ">
      <nav className=" flex justify-between items-center max-container">
        <Link href={"/"}>
          <Image
            alt="logo of nike"
            src={headerLogo}
            width={130}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </Link>
        <ul
          className="flex-1 flex justify-center
        items-center gap-16 max-lg:hidden"
        >
          {navLinks.map((items) => (
            <li key={items.label}>
              <Link
                className="font-montserrat leading-normal text-lg text-slate-gray"
                href={items.href}
              >
                {items.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
