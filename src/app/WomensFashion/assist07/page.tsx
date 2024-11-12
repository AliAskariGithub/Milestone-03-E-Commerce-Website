"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const products = [
  {
    id: 1,
    name: "Womens hoodie [Pink and Black Combo]",
    price: "$39.99",
    image: "/comp-images/clothes/hoodie05.png",
  },
  {
    id: 2,
    name: "Womens hoodie [Black and White Combo]",
    price: "$39.99",
    image: "/comp-images/clothes/hoodie06.png",
  },
  {
    id: 3,
    name: "Womens hoodie [Red and Black Combo]",
    price: "$39.99",
    image: "/comp-images/clothes/hoodie07.png",
  },
  {
    id: 4,
    name: "Womens hoodie [Blue and Black Combo]",
    price: "$39.99",
    image: "/comp-images/clothes/hoodie08.png",
  },
  {
    id: 5,
    name: "Womens Suits [White and Black]",
    price: "$29.99",
    image: "/comp-images/clothes/womean01.png",
  },
  {
    id: 6,
    name: "Womens Fork [Full Blue]",
    price: "$59.99",
    image: "/comp-images/clothes/women02.png",
  },
  {
    id: 7,
    name: "Womens Suits [Blue and Gold Combo]",
    price: "$39.99",
    image: "/comp-images/clothes/women03.png",
  },
  {
    id: 8,
    name: "Womens Suit [White and Black]",
    price: "$29.99",
    image: "/comp-images/clothes/women04.png",
  },
  {
    id: 9,
    name: "Womens Suits-Coat [White and Blue Touch]",
    price: "$49.99",
    image: "/comp-images/clothes/women05.png",
  },
  {
    id: 10,
    name: "Womens Suits [Plane Yellow]",
    price: "$39.99",
    image: "/comp-images/clothes/women06.png",
  },
  {
    id: 11,
    name: "Womens Suits [Blue and Gold Combo]",
    price: "$39.99",
    image: "/comp-images/clothes/women07.png",
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
            Womens Fashion
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
            <IoMdArrowRoundBack />
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Assist02;
