"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const products = [
  {
    id: 1,
    name: "Boys Bag [Casual and Other]",
    price: "$49.99",
    image: "/comp-images/handstuffs/bag01.png",
  },
  {
    id: 2,
    name: "Boys Bag [Casual and Other]",
    price: "$49.99",
    image: "/comp-images/handstuffs/bag02.png",
  },
  {
    id: 3,
    name: "Boys Bag [Casual and Other]",
    price: "$49.99",
    image: "/comp-images/handstuffs/bag03.png",
  },
  {
    id: 4,
    name: "Boys Bag [Casual and Other]",
    price: "$49.99",
    image: "/comp-images/handstuffs/bag04.png",
  },
  {
    id: 5,
    name: "Womens HandBag [for Parties]",
    price: "$49.99",
    image: "/comp-images/handstuffs/bag05.png",
  },
  {
    id: 6,
    name: "Womens HandBag [for Parties]",
    price: "$49.99",
    image: "/comp-images/handstuffs/bag06.png",
  },
  {
    id: 7,
    name: "Womens HandBag [for Parties]",
    price: "$49.99",
    image: "/comp-images/handstuffs/bag07.png",
  },
  {
    id: 8,
    name: "Womens HandBag [for Parties]",
    price: "$49.99",
    image: "/comp-images/handstuffs/bag08.png",
  },
  {
    id: 9,
    name: "Mens Watch [Causual and Party wear]",
    price: "$29.99",
    image: "/comp-images/handstuffs/watch01.png",
  },
  {
    id: 10,
    name: "Mens Watch [Causual and Party wear]",
    price: "$29.99",
    image: "/comp-images/handstuffs/watch02.png",
  },
  {
    id: 11,
    name: "Mens Watch [Causual and Party wear]",
    price: "$29.99",
    image: "/comp-images/handstuffs/watch03.png",
  },
  {
    id: 12,
    name: "Mens Watch [Causual and Party wear]",
    price: "$29.99",
    image: "/comp-images/handstuffs/watch04.png",
  },
  {
    id: 13,
    name: "Womens Watch [Causal and Party wear]",
    price: "$29.99",
    image: "/comp-images/handstuffs/watch05.png",
  },
  {
    id: 14,
    name: "Womens Watch [Causal and Party wear]",
    price: "$29.99",
    image: "/comp-images/handstuffs/watch06.png",
  },
  {
    id: 15,
    name: "Womens Watch [Causal and Party wear]",
    price: "$29.99",
    image: "/comp-images/handstuffs/watch07.png",
  },
  {
    id: 16,
    name: "Womens Watch [Causal and Party wear]",
    price: "$29.99",
    image: "/comp-images/handstuffs/watch08.png",
  },
  {
    id: 17,
    name: "Womens Jewellery [Causal and Party wear]",
    price: "$59.99",
    image: "/comp-images/handstuffs/jew01.png",
  },
  {
    id: 18,
    name: "Womens Jewellery [Causal and Party wear]",
    price: "$59.99",
    image: "/comp-images/handstuffs/jew02.png",
  },
  {
    id: 19,
    name: "Womens Jewellery [Causal and Party wear]",
    price: "$59.99",
    image: "/comp-images/handstuffs/jew03.png",
  },
  {
    id: 20,
    name: "Womens Jewellery [Causal and Party wear]",
    price: "$59.99",
    image: "/comp-images/handstuffs/jew04.png",
  }
  // Add more products for each category as needed
];

const Assist02 = () => {
  const [isadd, setIsAdd] = useState(0);
  return (
    <div className="min-h-screen bg-gray-200 py-10">
      <div className="container mx-auto px-6">
        <div className="text-black flex flex-row justify-between items-start mb-20">
          <h1 className="text-3xl font-extrabold text-black font-sans text-center">
          Watches, Bags & Jewellerys
          </h1>
          <Link
          href={"/Cart"}
            className={`flex justify-center items-center gap-2 ${
              isadd > 0 ? "text-[#000] text-3xl" : "text-[#636363] text-3xl"
            }`}
          >
            <FaCartArrowDown size={35} />
            {isadd}
          </Link>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-xl rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <button
                  className="text-gray-700"
                  onClick={() => setIsAdd(isadd + 1)}
                >
                  <p className="text-gray-600 hover:text-black font-semibold md:text-lg lg:text-lg xl:text-xl">
                    {product.price}
                  </p>
                </button>
              </div>
            </div>
          ))}
        </div>
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

export default Assist02;
