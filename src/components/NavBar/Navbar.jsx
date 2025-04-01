import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/USP-Multan.png";
import Button from "./Button";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="p-8">
      <div className="bg-gray-900 flex items-center justify-between">
        {/* Logo and mobile menu toggle */}
        <div className="flex justify-between w-full md:w-auto items-center">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-16 pl-28" />
          {/* Mobile menu toggle icon */}
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        {/* Desktop nav links */}
        <ul className="hidden md:flex uppercase items-center gap-8">
          <li>
            <Link to="/" className="text-white py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        {/* Desktop button */}
        <div className="hidden md:block">
          <Button />
        </div>
        {/* Mobile nav links */}
        <ul
          className={`md:hidden bg-white text-black fixed w-full top-0 left-0 overflow-y-auto py-24 pl-4 duration-500 ${
            open ? "left-0" : "-left-full z-10"
          }`}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block text-[sans-serif]">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
