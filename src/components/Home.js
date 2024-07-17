import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [drinkAtIndex, setDrinkAtIndex] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => {
        if (response.data.drinks && response.data.drinks.length > 6) {
          const drink = response.data.drinks[7];
          setDrinkAtIndex(drink);
        } else {
          console.error("No drink found at index 6.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <section id="home">
        <div className="relative min-h-screen flex flex-col justify-start items-center bg-white">
          {drinkAtIndex ? (
            <>
              <div className="w-full">
                <img
                  src={drinkAtIndex.strDrinkThumb}
                  alt={drinkAtIndex.strDrink}
                  className="w-full h-screen rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full h-3/5 flex flex-row justify-between items-center p-4">
                <div className="text-lg text-gray-900 leading-relaxed mb-4">
                  <p className="p-4 text-xl">
                    Becardi Breezer, Breezer for short, is a<br /> fruit-based
                    alcoholic drink which comes
                    <br /> in many flavours.
                  </p>
                </div>
                <div className="flex space-x-3 justify-end text-xl p-4 text-black font-semibold">
                  <p>{drinkAtIndex.strCategory}</p>
                  <p>{drinkAtIndex.strGlass}</p>
                  <p>{drinkAtIndex.strAlcoholic}</p>
                </div>
              </div>
            </>
          ) : (
            <p className="text-gray-900">Loading...</p>
          )}
          <button className="absolute bottom-10 text-center w-full">
            <div className="circle border border-black rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <span className="text-black">Scroll</span>
            </div>
            <div className="arrow text-black">
              <svg
                className="animate-bounce w-6 h-6 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
