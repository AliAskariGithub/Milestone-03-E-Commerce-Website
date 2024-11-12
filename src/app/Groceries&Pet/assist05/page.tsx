"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const products = [
  {
    id: 1,
    name: "Tapal dane Dar",
    price: "$19.99",
    image: "/comp-images/grocriess/grow01.png",
  },
  {
    id: 2,
    name: "Family Mixture",
    price: "$19.99",
    image: "/comp-images/grocriess/grow02.png",
  },
  {
    id: 3,
    name: "Mezan Oil",
    price: "$19.99",
    image: "/comp-images/grocriess/grow03.png",
  },
  {
    id: 4,
    name: "Tomato Sause",
    price: "$19.99",
    image: "/comp-images/grocriess/grow04.png",
  },
  {
    id: 5,
    name: "Salt",
    price: "$19.99",
    image: "/comp-images/grocriess/grow05.png",
  },
  {
    id: 6,
    name: "Lipton Tea",
    price: "$19.99",
    image: "/comp-images/grocriess/grow06.png",
  },
  {
    id: 7,
    name: "Meazon Oil [xl]",
    price: "$19.99",
    image: "/comp-images/grocriess/grow07.png",
  },
  {
    id: 8,
    name: "Noodles [xl]",
    price: "$19.99",
    image: "/comp-images/grocriess/grow08.png",
  },
  {
    id: 9,
    name: "Almonds",
    price: "$29.99",
    image: "/comp-images/grocriess/grow09.png",
  },
  {
    id: 10,
    name: "Cat Food [md]",
    price: "$19.99",
    image: "/comp-images/grocriess/pet01.png",
  },
  {
    id: 11,
    name: "Cat Food [xl]",
    price: "$19.99",
    image: "/comp-images/grocriess/pet02.png",
  },
  {
    id: 12,
    name: "Dog Food [md]",
    price: "$19.99",
    image: "/comp-images/grocriess/pet03.png",
  },
  {
    id: 13,
    name: "Dog Food [xl]",
    price: "$19.99",
    image: "/comp-images/grocriess/pet04.png",
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
          Groceries and Pet Food
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
