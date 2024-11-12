"use client"
import { useState } from "react";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-black py-4 px-6 font-sans">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-32 py-1.5">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          ZamZoo
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden md:flex text-xl md:justify-center md:items-center font-medium space-x-6">
          <Link href="#home" className="hover:text-[#3b3b3b]">Home</Link>
          <Link href="#products" className="hover:text-[#3b3b3b]">Products</Link>
          <Link href="/Cart" className="hover:text-[#3b3b3b] flex flex-row justify-center items-center gap-2 pr-5">Cart <FaCartArrowDown /></Link>

        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isMenuOpen ? <RxCross2 /> : <CgMenuRightAlt/> }
        </button>
      </div>

      {/* Mobile Navbar */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-black text-white p-4 space-y-4">
          <Link href="#home" className="block">Home</Link>
          <Link href="#products" className="block">Products</Link>
          <Link href="/Cart" className="block">Cart</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
