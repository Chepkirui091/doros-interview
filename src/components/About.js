import React, { useEffect, useState } from "react";

const fetchDrinks = async () => {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.error("Error fetching drinks:", error);
    return [];
  }
};

const About = () => {
  const [drinks, setDrinks] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState(null);

  useEffect(() => {
    const loadDrinks = async () => {
      const drinksData = await fetchDrinks();
      setDrinks(drinksData);
      if (drinksData.length > 10) {
        setSelectedDrink(drinksData[10]);
      }
    };

    loadDrinks();
  }, []);

  return (
    <>
      <section className="bg-white text-black mt-8" id="about">
        <h2 className="font-bold text-4xl mb-6">About Us</h2>
        <p className="text-gray-900 mb-6">
          Becardi Breezer, Breezer for short, is a fruit-based alcoholic
          <br /> drink which comes in many flavours.
        </p>
        <div className="flex flex-row justify-between space-x-10 items-center">
          <div className="flex-1">
            {selectedDrink && (
              <img
                src={selectedDrink.strDrinkThumb}
                alt={selectedDrink.strDrink}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            )}
          </div>

          <div className="flex-1 pr-4">
            <div className="font-bold text-xl flex justify-between">
              <h2>We Becardi</h2>
              <button>+</button>
            </div>

            <hr className="my-4 border-2 border-black font-bold text-xl" />
            <p className="text-gray-900 text-xl">
              Becardi is a rum brand established in 1862 that has been producing
              world-class rums since. Our history is rich, and hunger for
              continued innovation in the industry never ceases.
            </p>

            <div className="font-bold text-xl flex justify-between">
              <h2>Our Product</h2>
              <button>+</button>
            </div>
            <hr className="my-4 border-2 border-black font-bold text-xl" />

            <div className="font-bold text-xl flex justify-between">
              <h2>How We Work</h2>
              <button>+</button>
            </div>
            <hr className="my-4 border-2 border-black font-bold text-xl" />

            <div className="font-bold text-xl flex justify-between">
              <h2>Our Business</h2>
              <button>+</button>
            </div>
            <hr className="my-4 border-2 border-black font-bold text-xl" />

            <div className="font-bold text-xl flex justify-between">
              <h2>Contact Us</h2>
              <button>+</button>
            </div>
            <hr className="my-4 border-2 border-black font-bold text-xl" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
