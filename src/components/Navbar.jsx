"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const path = usePathname();
  const [openNav, setOpenNav] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full flex items-center px-6 py-5 md:px-20 justify-between bg-[#0000004d] z-10 backdrop-blur-sm">
      <div>
        <Link href="/">
          <img src="./images/logo.png" className="h-[30px] md:h-[40px]"/>
        </Link>
      </div>
      <RiMenu3Line
        size="1.8rem"
        className="md:hidden cursor-pointer text-white"
        onClick={() => setOpenNav(!openNav)}
        aria-label="Toggle menu"
      />
      <ul className="hidden md:flex md:items-center md:gap-8">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`hover:text-[#915EFF] text-xl text-white hover:font-bold transition-all cursor-pointer ${
                path === href && "text-[#915EFF] font-bold"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-black bg-opacity-80 backdrop-blur-sm z-20 flex flex-col items-center justify-center transform transition-transform duration-300 ${
          openNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setOpenNav(false)}
          className="absolute top-4 right-6 text-white text-2xl"
        >
          ✖
        </button>
        <ul className="flex flex-col gap-6 text-center">
          {links.map(({ href, label }) => (
            <li key={href} className="text-xl">
              <Link
                href={href}
                className={`text-white text-lg hover:text-[#4845D2] transition-all ${
                  path === href && "text-[#4845d2] font-bold"
                }`}
                onClick={() => setOpenNav(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
