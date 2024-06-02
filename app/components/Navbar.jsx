"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { MenuOverly } from "./MenuOverly";
import Headroom from "react-headroom";

const NavLinks = [
  {
    title: "About",
    path: "about",
  },
  {
    title: "Project",
    path: "project",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

export const Navbar = () => {
  const [navbarOpen, setnevbarOpen] = useState(false);

  return (
    <Headroom>
      <nav className=" top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
        <div className="container flex flex-wrap items-center justify-between mx-auto px-4 p-8">
          <Link
            href={"/"}
            className="text-lg md:text-5xl text-white font-semibold"
          >
            Portfolio
          </Link>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setnevbarOpen(true)}
                className=" flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
              >
                <IoMdMenu className=" w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={() => setnevbarOpen(false)}
                className=" flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
              >
                <FaXmark className=" w-5 h-5" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className=" flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {NavLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={`#${link.path}`} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {navbarOpen ? <MenuOverly links={NavLinks} /> : null}
      </nav>
    </Headroom>
  );
};
