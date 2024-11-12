import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { RiMastercardLine } from "react-icons/ri";
import { TbBrandPaypalFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-4 font-sans">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
        
        {/* Categories Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Categories</h3>
          <ul className="space-y-2">
            <Link href={"/ElectronicAccessories/assist01"} className="text-[#cacaca] hover:text-white text-sm">Electronic Accessories</Link><br />
            <Link href={"/Health&Beauty/assist02"} className="text-[#cacaca] hover:text-white text-sm">Health & Beauty</Link><br />
            <Link href={"/ElectronicDevices/assist04"} className="text-[#cacaca] hover:text-white text-sm">Electronic Devices</Link><br />
            <Link href={"/Groceries&Pet/assist05"} className="text-[#cacaca] hover:text-white text-sm">Groceries & Pets</Link><br />
            <Link href={"/Home&lifestyle/assist06"} className="text-[#cacaca] hover:text-white text-sm">Home & Lifestyle</Link><br />
            <Link href={"/WomensFashion/assist07"} className="text-[#cacaca] hover:text-white text-sm">Womens Fashion</Link><br />
            <Link href={"/MensFashion/assist08"} className="text-[#cacaca] hover:text-white text-sm">Mens Fashion</Link><br />
            <Link href={"/HandStuff/assist09"} className="text-[#cacaca] hover:text-white text-sm">Watches, Bags & Jewellery</Link><br />
          </ul>
        </div>

        {/* Payment Method Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Payment Method</h3>
          <p className="text-[#cacaca] hover:text-white text-sm">We accept all major credit and debit cards, PayPal, and bank transfers.</p>
          <div className="flex space-x-4 mt-4 justify-start items-center">
            {/* Replace these with images or icons of actual payment methods if needed */}
            <RiVisaLine size={50}/>
            <RiMastercardLine size={50}/>
            <TbBrandPaypalFilled size={40}/>
          </div>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
          <p className="text-[#cacaca] hover:text-white text-sm">Stay connected through our social media channels:</p>
          <div className="flex space-x-4 mt-4">
            <Link href={"https://www.facebook.com/"} aria-label="Facebook" className="text-2xl hover:text-[#1877F2] duration-150 transition"><FaFacebook /></Link>
            <Link href={"https://www.twitter.com/"} aria-label="Twitter" className="text-2xl hover:text-sky-400 duration-150 transition"><FaTwitter /></Link>
            <Link href={"https://www.instagram.com/"} aria-label="Instagram" className="text-2xl hover:text-fuchsia-500 duration-150 transition"><FaInstagram /></Link>
            <Link href={"https://www.youtube.com/"} aria-label="Instagram" className="text-2xl hover:text-red-600 duration-150 transition"><FaYoutube /></Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; 2024 ZamZoo | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
