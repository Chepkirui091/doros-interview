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
  const [sections, setSections] = useState({
    weBecardi: false,
    ourProduct: false,
    howWeWork: false,
    ourBusiness: false,
    contactUs: false,
  });

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

  const toggleSection = (section) => {
    setSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  return (
      <>
        <section className="bg-white text-black mt-8 p-4" id="about">
          <h2 className="font-bold text-4xl mb-6">About Us</h2>
          <p className="text-gray-900 mb-6 text-xl">
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
                <button onClick={() => toggleSection("weBecardi")}>+</button>
              </div>
              {sections.weBecardi && (
                  <>
                    <hr className="my-4 border-2 border-black font-bold text-xl" />
                    <p className="text-gray-900 text-xl">
                      Becardi is a rum brand established in 1862 that has been producing
                      world-class rums since. Our history is rich, and hunger for
                      continued innovation in the industry never ceases.
                    </p>
                  </>
              )}

              <div className="font-bold text-xl flex justify-between">
                <h2>Our Product</h2>
                <button onClick={() => toggleSection("ourProduct")}>+</button>
              </div>
              {sections.ourProduct && (
                  <>
                    <hr className="my-4 border-2 border-black font-bold text-xl" />
                    <p className="text-gray-900 text-xl">
                      We offer a variety of flavors to suit every palate. Our drinks are crafted with the finest ingredients to ensure quality and taste.
                    </p>
                  </>
              )}

              <div className="font-bold text-xl flex justify-between">
                <h2>How We Work</h2>
                <button onClick={() => toggleSection("howWeWork")}>+</button>
              </div>
              {sections.howWeWork && (
                  <>
                    <hr className="my-4 border-2 border-black font-bold text-xl" />
                    <p className="text-gray-900 text-xl">
                      Our production process is a blend of traditional methods and modern technology. We maintain high standards of quality control to deliver the best products.
                    </p>
                  </>
              )}

              <div className="font-bold text-xl flex justify-between">
                <h2>Our Business</h2>
                <button onClick={() => toggleSection("ourBusiness")}>+</button>
              </div>
              {sections.ourBusiness && (
                  <>
                    <hr className="my-4 border-2 border-black font-bold text-xl" />
                    <p className="text-gray-900 text-xl">
                      We are a global brand with a presence in over 100 countries. Our business strategy focuses on sustainability and community engagement.
                    </p>
                  </>
              )}

              <div className="font-bold text-xl flex justify-between">
                <h2>Contact Us</h2>
                <button onClick={() => toggleSection("contactUs")}>+</button>
              </div>
              {sections.contactUs && (
                  <>
                    <hr className="my-4 border-2 border-black font-bold text-xl" />
                    <p className="text-gray-900 text-xl">
                      For inquiries, please reach out to us via our contact form or email us at contact@becardi.com.
                    </p>
                  </>
              )}
            </div>
          </div>
        </section>
      </>
  );
};

export default About;
