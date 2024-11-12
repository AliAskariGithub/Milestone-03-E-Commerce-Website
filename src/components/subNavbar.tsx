"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TbCategory } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

const SubNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex p-2 justify-between items-center font-sans text-black">
      {/* Category Button to Toggle Sidebar */}
      <button
        onClick={toggleSidebar}
        className="px-4 flex text-xl font-sans flex-row justify-center items-center gap-1 py-2 font-medium text-white rounded-lg md:ml-6"
      >
        <TbCategory size={30} />
      </button>

      <div className="flex flex-row justify-start items-center gap-1 w-full sm:w-3/4 lg:w-3/6 bg-white rounded-lg p-2">
        <IoSearchOutline className="text-black ml-2" size={20} />
        <input
          type="text"
          placeholder="Search in ZamZoo"
          className="font-sans w-full py-2 px-3 text-base sm:text-lg lg:text-xl rounded-lg focus:outline-none"
        />
      </div>
      <Link
        href="/SignIn/LogIn"
        className="hover:bg-[#3b3b3b] bg-[#000] py-2 px-4 w-24 md:w-28 lg:w-32 xl:w-36 justify-center items-center flex text-xs sm:text-lg lg:text-xl rounded-xl text-[#e7e7e7] transition duration-150 hover:text-white"
      >
        Login
      </Link>

      {/* Sidebar Component */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-5 mb-1 font-sans">
          <h2 className="text-2xl font-bold text-white">Categories</h2>
          <button onClick={toggleSidebar} className="text-2xl">
            <IoMdClose />
          </button>
        </div>
        <ul className="space-y-4 p-4 bg-[#2e2e2e] flex justify-center items-center gap-10  font-sans">
          <li className="h-max gap-3 cursor-pointer">
            <Link
              href={"/ElectronicAccessories/assist01"}
              className="hover:bg-[#272727] text-[#cacaca] hover:text-white rounded-lg py-2 px-4"
            >
              Electronic Accessories
            </Link>
            <br />
            <br />
            <Link
              href={"/Health&Beauty/assist02"}
              className="hover:bg-[#272727] text-[#cacaca] hover:text-white rounded-lg py-2 px-4"
            >
              Health & Beauty
            </Link>
            <br />
            <br />
            <Link
              href={"/ElectronicDevices/assist04"}
              className="hover:bg-[#272727] text-[#cacaca] hover:text-white rounded-lg py-2 px-4"
            >
              Electronic Devices
            </Link>
            <br />
            <br />
            <Link
              href={"/Groceries&Pet/assist05"}
              className="hover:bg-[#272727] text-[#cacaca] hover:text-white rounded-lg py-2 px-4"
            >
              Groceries & Pets
            </Link>
            <br />
            <br />
            <Link
              href={"/Home&lifestyle/assist06"}
              className="hover:bg-[#272727] text-[#cacaca] hover:text-white rounded-lg py-2 px-4"
            >
              Home & Lifestyle
            </Link>
            <br />
            <br />
            <Link
              href={"/WomensFashion/assist07"}
              className="hover:bg-[#272727] text-[#cacaca] hover:text-white rounded-lg py-2 px-4"
            >
              Womens Fashion
            </Link>
            <br />
            <br />
            <Link
              href={"/MensFashion/assist08"}
              className="hover:bg-[#272727] text-[#cacaca] hover:text-white rounded-lg py-2 px-4"
            >
              Mens Fashion
            </Link>
            <br />
            <br />
            <Link
              href={"/HandStuff/assist09"}
              className="hover:bg-[#272727] text-[#cacaca] hover:text-white rounded-lg py-2 px-4"
            >
              Watches, Bags & Jewellery
            </Link>
            <div className="absolute bottom-5 right-5 justify-end items-end">
          <div className="flex flex-col justify-start items-center">
          <Link
            href={"/"}
            className="bg-[#000] hover:bg-[#2e2e2e] font-sans flex w-max justify-center items-center mt-10 duration-150 text-xl text-white py-2 px-6 rounded-lg gap-2"
          >
            <IoMdArrowRoundBack />Back
          </Link>
        </div></div>
          </li>
          
        </ul>
      </aside>

      {/* Overlay for Sidebar on Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default SubNavbar;
