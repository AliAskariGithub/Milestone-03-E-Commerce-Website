"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";

const images = [
  "/image01.png",
  "/image02.png",
  "/image03.png",
  "/image04.png",
  "/image05.jpg",
  "/image06.png",
  "/image07.png",
];

const products = [
  {
    id: 1,
    name: "Hoddies",
    price: "$39.99",
    image: "/comp-images/clothes/hoodie04.png",
  },
  {
    id: 2,
    name: "Earbuds",
    price: "$19.99",
    image: "/comp-images/earbirds/earpods02.png",
  },
  {
    id: 3,
    name: "Bed",
    price: "$79.99",
    image: "/comp-images/furniture/bed02.png",
  },
  {
    id: 4,
    name: "Shirts",
    price: "$59.99",
    image: "/comp-images/clothes/shirt05.png",
  },
  {
    id: 5,
    name: "Blush",
    price: "$19.99",
    image: "/comp-images/makeup/tik04.png",
  },
  {
    id: 6,
    name: "Earbuds",
    price: "$19.99",
    image: "/comp-images/earbirds/earpods03.png",
  },
  {
    id: 7,
    name: "Sumsung",
    price: "$99.99",
    image: "/comp-images/Phones/phone02.png",
  },
  {
    id: 8,
    name: "Shirts",
    price: "$59.99",
    image: "/comp-images/clothes/shirt03.png",
  },
  {
    id: 9,
    name: "Earbuds",
    price: "$19.99",
    image: "/comp-images/earbirds/earpods01.png",
  },
  {
    id: 10,
    name: "Hoddies",
    price: "$39.99",
    image: "/comp-images/clothes/hoodie01.png",
  },
  {
    id: 11,
    name: "Earbuds",
    price: "$19.99",
    image: "/comp-images/earbirds/earpods04.png",
  },
  {
    id: 12,
    name: "Cupboard",
    price: "$59.99",
    image: "/comp-images/furniture/cupb04.png",
  },
  {
    id: 13,
    name: "iphone",
    price: "$99.99",
    image: "/comp-images/Phones/phone01.png",
  },
  {
    id: 14,
    name: "Shirts",
    price: "$59.99",
    image: "/comp-images/clothes/shirt01.png",
  },
  {
    id: 15,
    name: "Conditioner",
    price: "$99.99",
    image: "/comp-images/Electronics/air01.png",
  },
  {
    id: 16,
    name: "Hoddies",
    price: "$39.99",
    image: "/comp-images/clothes/hoodie03.png",
  },
  {
    id: 17,
    name: "Realme",
    price: "$99.99",
    image: "/comp-images/Phones/phone03.png",
  },
  {
    id: 18,
    name: "Maskara",
    price: "$19.99",
    image: "/comp-images/makeup/tik01.png",
  },
  {
    id: 19,
    name: "Product 4",
    price: "$99.99",
    image: "/comp-images/computer/item02.png",
  },
  {
    id: 20,
    name: "Refrigerator",
    price: "$99.99",
    image: "/comp-images/Electronics/fridge04.png",
  },
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-col items-center justify-center py-16 px-6 md:px-16 bg-zinc-500 text-white">
        {/* Image div */}
        <div className="relative w-full md:w-full flex items-center justify-center">
          <button
            onClick={handlePrevImage}
            className="absolute left-0 text-3xl p-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full focus:outline-none"
          >
            <IoMdArrowRoundBack />
          </button>

          <Image
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            width={1000}
            height={1000}
            className="rounded-lg object-cover w-fullh-full"
          />

          <button
            onClick={handleNextImage}
            className="absolute right-0 text-3xl p-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full focus:outline-none"
          >
            <IoMdArrowRoundForward />
          </button>
        </div>

        {/* Text div */}
        <div className="mt-8 md:mt-0 md:w-1/2 text-center">
          <h1 className="text-7xl font-bold mb-4 text-gray-800 mt-4">
            Winter Collection
          </h1>
          <p className="text-lg mb-6">
            Best & hybird Quality Clothes introduced by ZamZoo.
          </p>
          <Link href={"#products"} className="bg-[#000] hover:bg-[#2e2e2e] font-sans duration-150 text-xl text-white py-2 px-6 rounded-lg">
            Start Shopping
          </Link>
        </div>
      </section>

      {/* Product Grid Section */}
      <section id="products" className="py-16 px-6 bg-zinc-300">
        <h2 className="text-3xl font-bold text-black text-center mb-8 font-serif">
          Best and Hybird Quality Items 
        </h2>

        <div className="grid grid-cols-3 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-2xl rounded-lg p-4">
              <div className="relative w-24 md:w-full h-28 md:h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="rounded-lg w-20 h-24 md:w-full md:h-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1 font-sans sm:mt-1 md:mt-2 lg:mt-3 xl:mt-4">{product.name}</h3>
              <Link href={""} className="text-gray-600 underline hover:no-underline font-sans hover:text-black transition duration-150 font-medium">{product.price}</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
