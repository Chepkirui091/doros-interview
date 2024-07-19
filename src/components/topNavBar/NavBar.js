"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "@/components/topNavBar/Logo";
import ShopNow from "@/components/topNavBar/ShopNow";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [margaritas, setMargaritas] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchMargaritas = async () => {
      try {
        const response = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
        );
        setMargaritas(response.data.drinks);
        setFilteredDrinks(response.data.drinks);
      } catch (error) {
        console.error("Error fetching Margarita data:", error);
      }
    };

    fetchMargaritas();
  }, []);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    if (searchTerm.trim() === "") {
      setFilteredDrinks(margaritas);
    } else {
      const filtered = margaritas.filter((drink) =>
        drink.strDrink.toLowerCase().includes(searchTerm)
      );
      setFilteredDrinks(filtered);
    }
    setShowDropdown(true);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setFilteredDrinks(margaritas);
    setShowDropdown(false);
  };

  const handleDrinkClick = (drinkName) => {
    setSearchTerm(drinkName);
    setShowDropdown(false);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(".dropdown-container")) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-800">
      <div className="flex flex-wrap items-center justify-between p-4 mx-auto max-w-7xl">
        <Logo />
        <div className="flex flex-1 justify-center space-x-4">
          <a href="#home" className="hidden sm:block">
            Home
          </a>
          <div className="relative ml-auto hidden sm:block">
            <a href="#flavours" className="">
              Flavours
            </a>
          </div>
          <a href="#products" className="hidden sm:block">
            Product
          </a>
          <a href="#about" className="hidden sm:block">
            About Us
          </a>
          <a href="#contact" className="hidden sm:block">
            Contact Us
          </a>
        </div>
        <div className="relative dropdown-container w-full sm:w-auto sm:mr-20 ">
          <IoIosSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-500 dark:text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            onClick={() => setShowDropdown(true)}
            className="border-2 border-gray-500 py-1 px-2 pl-10 w-40 sm:w-auto rounded-none dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-blue-500"
          />

          {searchTerm && ( 
            <button
              onClick={handleClearSearch}
              className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400 focus:outline-none"
            >
              <AiOutlineClose className="h-4 w-4" />
            </button>
          )}

          {showDropdown && (
            <div className="absolute mt-2 w-full sm:w-auto right-0 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg z-10">
              {filteredDrinks.map((drink) => (
                <a
                  key={drink.idDrink}
                  href="#"
                  onClick={() => handleDrinkClick(drink.strDrink)}
                  className="block text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 py-1 px-4"
                >
                  {drink.strDrink}
                </a>
              ))}
            </div>
          )}
        </div>
        <ShopNow className="hidden sm:block" />
      </div>
    </nav>
  );
};

export default NavBar;
