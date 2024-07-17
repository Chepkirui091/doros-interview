"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
        );
        setCocktails(response.data.drinks.slice(0, 6));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="products" className="bg-white text-black mt-8">
      <div className="">
        <div className="flex justify-end text-gray-900">
          <div className="p-8">
            <h2 className="font-bold text-4xl">Our Product</h2>
            <p className="text-xl">
              Becardi Breezer, Breezer for short, is a fruit-based alcoholic
              <br />
              drink which comes in many flavours.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cocktails.map((cocktail) => (
            <div
              key={cocktail.idDrink}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl">{cocktail.strDrink}</h2>
                <div className="flex items-center">
                  <span className="text-gray-700">Flavour:</span>
                  <span className="ml-2 text-black">
                    {cocktail.strCategory}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700">Size:</span>
                  <span className="ml-2 text-black">250ml</span>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-gray-700">Price:</span>
                    <span className="font-bold text-gray-900">$8.99</span>
                  </div>
                  <button className="border-2 border-gray-500 py-1 px-2 rounded-none">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="relative">
          <button className=" ">
            <div className="flex items-center justify-center text-center">
              <div className="circle border border-black rounded-full w-24 h-24 flex items-center justify-center">
                <span className="text-black">View All</span>
              </div>
              <div className="arrow text-black ml-4">
                <svg
                  className="animate-bounce w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"

                  ></path>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
