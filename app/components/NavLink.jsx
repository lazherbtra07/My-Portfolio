"use client";
import Link from "next/link";
import { useState } from "react";

const NavLink = ({ href, title }) => {
  const [navbarOpen, setnevbarOpen] = useState(false);
  return (
    <Link
      onClick={() => setnevbarOpen(false)}
      href={href}
      className=" block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounded md:p-0 hover:text-white "
    >
      {title}
    </Link>
  );
};

export default NavLink;
