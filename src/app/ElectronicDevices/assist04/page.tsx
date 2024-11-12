"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const products = [
  {
    id: 1,
    name: "Keyboard rgb K-2",
    price: "$14.99",
    image: "/comp-images/computer/item01.png",
  },
  {
    id: 2,
    name: "Keyboard rgb Qiqu",
    price: "$14.99",
    image: "/comp-images/computer/item02.png",
  },
  {
    id: 3,
    name: "Keyboard rgb Tealy",
    price: "$14.99",
    image: "/comp-images/computer/item03.png",
  },
  {
    id: 4,
    name: "Keyboard wireless",
    price: "$14.99",
    image: "/comp-images/computer/item04.png",
  },
  {
    id: 5,
    name: "CUP [hp]",
    price: "$299.99",
    image: "/comp-images/computer/pc01.png",
  },
  {
    id: 6,
    name: "CUP [Dell]",
    price: "$299.99",
    image: "/comp-images/computer/pc02.png",
  },
  {
    id: 7,
    name: "CUP [Lenevo]",
    price: "$299.99",
    image: "/comp-images/computer/pc03.png",
  },
  {
    id: 8,
    name: "CUP [Thinkpad]",
    price: "$299.99",
    image: "/comp-images/computer/pc04.png",
  },
  {
    id: 9,
    name: "Phones [iphone]",
    price: "$59.99",
    image: "/comp-images/Phones/phone01.png",
  },
  {
    id: 10,
    name: "Phones [Samsung]",
    price: "$59.99",
    image: "/comp-images/Phones/phone02.png",
  },
  {
    id: 11,
    name: "Phones [Realme]",
    price: "$59.99",
    image: "/comp-images/Phones/phone03.png",
  },
  {
    id: 12,
    name: "Phones [Nothing]",
    price: "$59.99",
    image: "/comp-images/Phones/phone04.png",
  },
  {
    id: 13,
    name: "Phones [Oppo]",
    price: "$29.99",
    image: "/comp-images/Phones/phone05.png",
  },
  {
    id: 14,
    name: "Phones [Tecno Spark]",
    price: "$49.99",
    image: "/comp-images/Phones/phone06.png",
  },
  {
    id: 15,
    name: "Phones [Galaxy]",
    price: "$19.99",
    image: "/comp-images/Phones/phone07.png",
  },
  {
    id: 16,
    name: "Phones [Vivo]",
    price: "$99.99",
    image: "/comp-images/Phones/phone08.png",
  },
  {
    id: 17,
    name: "Phones [Huawei]",
    price: "$59.99",
    image: "/comp-images/Phones/phone09.png",
  },
  {
    id: 18,
    name: "Phones [iphone 6]",
    price: "$59.99",
    image: "/comp-images/Phones/phone10.png",
  },
  {
    id: 19,
    name: "Phones [Realme]",
    price: "$59.99",
    image: "/comp-images/Phones/phone11.png",
  },
  {
    id: 20,
    name: "Phones [iphone 13]",
    price: "$59.99",
    image: "/comp-images/Phones/phone12.png",
  },
  {
    id: 21,
    name: "Phones [Oppo]",
    price: "$29.99",
    image: "/comp-images/Phones/phone13.png",
  },
  {
    id: 22,
    name: "Phones [Huawei]",
    price: "$49.99",
    image: "/comp-images/Phones/phone14.png",
  },
  {
    id: 23,
    name: "Phones [Samsung S23]",
    price: "$19.99",
    image: "/comp-images/Phones/phone15.png",
  },
  {
    id: 24,
    name: "Earbuds [iphone]",
    price: "$199.99",
    image: "/comp-images/earbirds/earpods01.png",
  },
  {
    id: 25,
    name: "Earbuds [Samsung]",
    price: "$299.99",
    image: "/comp-images/earbirds/earpods02.png",
  },
  {
    id: 26,
    name: "Earbuds [local]",
    price: "$39.99",
    image: "/comp-images/earbirds/earpods03.png",
  },
  {
    id: 27,
    name: "Earbuds [Puma]",
    price: "$69.99",
    image: "/comp-images/earbirds/earpods04.png",
  },
  {
    id: 28,
    name: "Headset [iphone]",
    price: "$99.99",
    image: "/comp-images/earbirds/headset01.png",
  },
  {
    id: 29,
    name: "Headset [P47]",
    price: "$149.99",
    image: "/comp-images/earbirds/headset02.png",
  },
  {
    id: 30,
    name: "Headset [Rapid]",
    price: "$49.99",
    image: "/comp-images/earbirds/headset03.png",
  },
  {
    id: 31,
    name: "Headset [Local]",
    price: "$49.99",
    image: "/comp-images/earbirds/headset04.png",
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
            Electronic Devices
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
