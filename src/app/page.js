"use client";

import Flavors from "@/components/Flavours";
import About from "@/components/About"
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import HomePage from "@/components/Home";

export default function Home() {
  return (
    <>
    <div className="">
      <HomePage />
      <Flavors />
      <Products />
      <About />
      <Footer/>
    </div>
    </>
  );
}
