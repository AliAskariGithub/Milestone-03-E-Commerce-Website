"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const products = [
  {
    id: 1,
    name: "Mascara",
    price: "$29.99",
    icon: "+",
    image: "/comp-images/makeup/tik01.png",
  },
  {
    id: 2,
    name: "EyeShadow",
    price: "$49.99",
    image: "/comp-images/makeup/tik02.png",
  },
  {
    id: 3,
    name: "Lipstick",
    price: "$19.99",
    image: "/comp-images/makeup/tik03.png",
  },
  {
    id: 4,
    name: "Blush",
    price: "$99.99",
    image: "/comp-images/makeup/tik04.png",
  },
  {
    id: 5,
    name: "MakeUp Kit",
    price: "$29.99",
    image: "/comp-images/makeup/tik05.png",
  },
  {
    id: 6,
    name: "Blush 02",
    price: "$49.99",
    image: "/comp-images/makeup/tik06.png",
  },
  {
    id: 7,
    name: "Lipstick 02",
    price: "$19.99",
    image: "/comp-images/makeup/tik07.png",
  },
  {
    id: 8,
    name: "Lipstick 03",
    price: "$99.99",
    image: "/comp-images/makeup/tik08.png",
  },
  {
    id: 9,
    name: "Night Cream",
    price: "$29.99",
    image: "/comp-images/makeup/tik09.png",
  },
  {
    id: 10,
    name: "2k Gold Whiting Facewash",
    price: "$49.99",
    image: "/comp-images/makeup/tik10.png",
  },
  {
    id: 11,
    name: "Face Ice Roller",
    price: "$19.99",
    image: "/comp-images/makeup/tik11.png",
  },
  {
    id: 12,
    name: "Heating Pad",
    price: "$99.99",
    image: "/comp-images/makeup/tik12.png",
  },
  {
    id: 13,
    name: "Skin Polish",
    price: "$29.99",
    image: "/comp-images/makeup/tik13.png",
  },
  {
    id: 14,
    name: "Sunscreen",
    price: "$49.99",
    image: "/comp-images/makeup/tik14.png",
  },
  {
    id: 15,
    name: "Face Mask",
    price: "$19.99",
    image: "/comp-images/makeup/tik15.png",
  },
  {
    id: 16,
    name: "Jade Roller",
    price: "$99.99",
    image: "/comp-images/makeup/tik16.png",
  },
  // Add more products for each category as needed
];

const Assist02 = () => {
  const [isadd, setIsAdd] = useState(0);
  return (
    <div className="min-h-screen bg-gray-200 py-10">
      <div className="container mx-auto px-6">
        <div className="text-black flex flex-row justify-between items-start mb-20">
          <h1 className="text-3xl font-extrabold text-black font-sans text-center">
            Health & Beauty
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
                  {product.price}
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
            <IoMdArrowRoundBack />
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Assist02;
