"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const Flavors = () => {
  const [drinks, setDrinks] = useState([]);
  const [visibleDrinks, setVisibleDrinks] = useState([0, 4]);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
        );
        if (response.data.drinks) {
          setDrinks(response.data.drinks);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDrinks();
  }, []);

  const scrollRight = () => {
    if (visibleDrinks[1] < drinks.length) {
      setVisibleDrinks([visibleDrinks[0] + 1, visibleDrinks[1] + 1]);
    }
  };

  const scrollLeft = () => {
    if (visibleDrinks[0] > 0) {
      setVisibleDrinks([visibleDrinks[0] - 1, visibleDrinks[1] - 1]);
    }
  };

  return (
    <section id="flavours">
      <div className="bg-white relative p-4 md:p-8 mt-8">
        <div className="text-gray-900">
          <h1 className="text-4xl font-bold mb-4">Breezer Flavours</h1>
          <p className="text-lg leading-relaxed mb-4 text-xl">
            Becardi Breezer, Breezer for short, is a fruit-based<br/> alcoholic drink
            which comes in many flavours.
          </p>
        </div>

        <div className="flex items-center justify-center">
          {visibleDrinks[0] > 0 && (
            <div onClick={scrollLeft} className="cursor-pointer mr-4">
              <svg
                className="w-10 h-10 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </div>
          )}

          <div
            className="flex overflow-x-auto space-x-4 w-full max-w-full justify-center"
            style={{ maxWidth: "90vw" }}
          >
            {drinks.slice(visibleDrinks[0], visibleDrinks[1]).map((drink) => (
              <div
                key={drink.idDrink}
                className="flex-shrink-0 bg-white rounded-lg shadow-lg p-4"
                style={{ width: "300px" }}
              >
                <img
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <h2 className="text-xl font-bold mb-2 text-center">
                  {drink.strDrink}
                </h2>
                <p className="text-sm text-gray-700 font-bold text-center uppercase">
                  {drink.strDrink}
                </p>
              </div>
            ))}
          </div>

          {visibleDrinks[1] < drinks.length && (
            <div onClick={scrollRight} className="cursor-pointer ml-4">
              <svg
                className="w-10 h-10 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Flavors;
