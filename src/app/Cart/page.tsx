// pages/cart.tsx
"use client";

import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

const Cart = () => {
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-white">Cart</h1>
        <div className="flex justify-end items-center">
          <Link
            href={"/"}
            className="bg-[#000] hover:bg-[#2e2e2e] font-sans flex w-max justify-center items-center mt-10 duration-150 text-xl text-white py-2 px-6 rounded-lg gap-2"
          >
           <IoMdArrowRoundBack />Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
