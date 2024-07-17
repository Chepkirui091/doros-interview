import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Logo from "./topNavBar/Logo";

const Footer = ({ theme }) => {
  const bgColorClass = theme === "dark" ? "bg-gray-800" : "white";
  const textColorClass = theme === "dark" ? "text-white" : "text-black";

  return (
    <footer className={`${bgColorClass} py-8 px-4 md:px-24`}>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center">
        <Link href="#" className="w-full md:w-1/4 lg:w-1/5 mb-8 md:mb-0">
          <Logo />
        </Link>
        <div className="w-full md:w-1/4 lg:w-1/5 mb-8 md:mb-0">
          <div className={`mb-4 flex flex-col ${textColorClass}`}>
            <h3 className="text-lg font-semibold mb-2">ABOUT US</h3>
            <Link href="#">About Bacardi</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Media</Link>
            <Link href="#">Career</Link>
            <Link href="#">FAQ</Link>
          </div>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 mb-8 md:mb-0">
          <div className={`mb-4 flex flex-col ${textColorClass}`}>
            <h3 className="text-lg font-semibold mb-2">LINKS</h3>
            <Link href="#home">Home</Link>
            <Link href="#flavours">Flavours</Link>
            <Link href="#products">Product</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5">
          <div className={`${textColorClass} mb-4`}>
            <p className="font-semibold mb-2">STAY IN THE KNOW</p>
            <input
              type="email"
              placeholder="Enter your email address"
              className={`w-full py-2 px-3 border-b-2 border-black focus:outline-none focus:border-blue-500 ${textColorClass}`}
            />
          </div>
          <div className={`${textColorClass}`}>
            <p className="font-semibold mb-2">FOLLOW US</p>
            <div className="flex items-center space-x-4">
              <FaInstagram className="h-6 w-6" />
              <FaFacebook className="h-6 w-6" />
              <FaTwitter className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
