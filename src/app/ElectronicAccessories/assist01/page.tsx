"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const products = [
  {
    id: 1,
    name: "Air Conditioner [Dawlance]",
    price: "$99.99",
    image: "/comp-images/Electronics/air01.png",
  },
  {
    id: 2,
    name: "Air Conditioner [Gree]",
    price: "$99.99",
    image: "/comp-images/Electronics/air02.png",
  },
  {
    id: 3,
    name: "Air Conditioner [Haier]",
    price: "$99.99",
    image: "/comp-images/Electronics/air03.png",
  },
  {
    id: 4,
    name: "Air Conditioner [kenwood]",
    price: "$99.99",
    image: "/comp-images/Electronics/air04.png",
  },
  {
    id: 5,
    name: "Refrigerator [Dawlance]",
    price: "$49.99",
    image: "/comp-images/Electronics/fridge01.png",
  },
  {
    id: 6,
    name: "Refrigerator [Gree]",
    price: "$49.99",
    image: "/comp-images/Electronics/fridge02.png",
  },
  {
    id: 7,
    name: "Refrigerator [Haier]",
    price: "$49.99",
    image: "/comp-images/Electronics/fridge03.png",
  },
  {
    id: 8,
    name: "Refrigerator [kenwood]",
    price: "$49.99",
    image: "/comp-images/Electronics/fridge04.png",
  },
  {
    id: 9,
    name: "Heater [Dawlance]",
    price: "$59.99",
    image: "/comp-images/Electronics/heater01.png",
  },
  {
    id: 10,
    name: "Heater [Gree]",
    price: "$59.99",
    image: "/comp-images/Electronics/heater02.png",
  },
  {
    id: 11,
    name: "Heater [Haier]",
    price: "$59.99",
    image: "/comp-images/Electronics/heater03.png",
  },
  {
    id: 12,
    name: "Heater [kenwood]",
    price: "$59.99",
    image: "/comp-images/Electronics/heater04.png",
  },
  {
    id: 13,
    name: "Washing Machine [Dawlance]",
    price: "$29.99",
    image: "/comp-images/Electronics/machine01.png",
  },
  {
    id: 14,
    name: "Washing Machine [Gree]",
    price: "$49.99",
    image: "/comp-images/Electronics/machine02.png",
  },
  {
    id: 15,
    name: "Washing Machine [Haier]",
    price: "$19.99",
    image: "/comp-images/Electronics/machine03.png",
  },
  {
    id: 16,
    name: "Washing Machine [kenwood]",
    price: "$99.99",
    image: "/comp-images/Electronics/machine04.png",
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
            Electronic Accessories
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
                  <p className="text-gray-600 mb-2 hover:text-black font-semibold md:text-lg lg:text-lg xl:text-xl">
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
