"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const products = [
  {
    id: 1,
    name: "Double Bed [md]",
    price: "$69.99",
    image: "/comp-images/furniture/bed01.png",
  },
  {
    id: 2,
    name: "Sinle Bed [md]",
    price: "$69.99",
    image: "/comp-images/furniture/bed02.png",
  },
  {
    id: 3,
    name: "Double Bed [lg]",
    price: "$59.99",
    image: "/comp-images/furniture/bed03.png",
  },
  {
    id: 4,
    name: "Double Bed [xl]",
    price: "$69.99",
    image: "/comp-images/furniture/bed04.png",
  },
  {
    id: 5,
    name: "CupBoard [xl]",
    price: "$39.99",
    image: "/comp-images/furniture/cupb01.png",
  },
  {
    id: 6,
    name: "CupBoard [sm]",
    price: "$39.99",
    image: "/comp-images/furniture/cupb02.png",
  },
  {
    id: 7,
    name: "CupBoard [lg]",
    price: "$39.99",
    image: "/comp-images/furniture/cupb03.png",
  },
  {
    id: 8,
    name: "CupBoard [md]",
    price: "$39.99",
    image: "/comp-images/furniture/cupb04.png",
  },
  {
    id: 9,
    name: "Sofa Set [6 Seater]",
    price: "$89.99",
    image: "/comp-images/furniture/SOFA01 (2).PNG",
  },
  {
    id: 10,
    name: "Sofa Set [4 Seater]",
    price: "$89.99",
    image: "/comp-images/furniture/SOFA01.PNG",
  },
  {
    id: 11,
    name: "Sofa Set [xl curve]",
    price: "$89.99",
    image: "/comp-images/furniture/SOFA03.PNG",
  },
  {
    id: 12,
    name: "Sofa Set [8 Seater]",
    price: "$89.99",
    image: "/comp-images/furniture/SOFA04.PNG",
  },
  {
    id: 13,
    name: "Table [3 Tableset]",
    price: "$29.99",
    image: "/comp-images/furniture/TABLE01.PNG",
  },
  {
    id: 14,
    name: "Table [1 Rounded Table]",
    price: "$29.99",
    image: "/comp-images/furniture/TABLE02.PNG",
  },
  {
    id: 15,
    name: "Table [2 Tableset]",
    price: "$29.99",
    image: "/comp-images/furniture/TABLE03.PNG",
  },
  {
    id: 16,
    name: "Table [1 Mini Table]",
    price: "$29.99",
    image: "/comp-images/furniture/TABLE04.PNG",
  },
  {
    id: 17,
    name: "Vanity [Brown Color]",
    price: "$39.99",
    image: "/comp-images/furniture/vanity01.png",
  },
  {
    id: 18,
    name: "Vanity [White Color]",
    price: "$39.99",
    image: "/comp-images/furniture/vanity02.png",
  },
  {
    id: 19,
    name: "Vanity [Pink Color]",
    price: "$39.99",
    image: "/comp-images/furniture/vanity03.png",
  },
  {
    id: 20,
    name: "Vanity [Gold Color]",
    price: "$39.99",
    image: "/comp-images/furniture/vanity04.png",
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
            Furniture
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
