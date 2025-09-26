import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!term.trim()) return; // don't submit empty search

    setIsLoading(true);
    await onSubmit(term); // wait for results from parent
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-10">
      <form
        onSubmit={handleFormSubmit}
        className="flex items-center bg-white rounded-full shadow-md border border-gray-200 overflow-hidden 
               focus-within:ring-2 focus-within:ring-indigo-400 transition"
      >
        {/* Search Icon */}
        <span className="pl-4 text-gray-400">
          <IoMdSearch />
        </span>

        {/* Input */}
        <input
          value={term}
          onChange={handleChange}
          placeholder="Search for stunning images..."
          className="flex-1 px-4 py-2 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
        />

        {/* Button */}
        <button
          type="submit"
          disabled={isLoading || !term.trim()}
          className={`font-semibold px-5 py-2 rounded-full transition ${
            isLoading || !term.trim()
              ? "bg-indigo-300 cursor-not-allowed text-white"
              : "bg-indigo-500 hover:bg-indigo-600 text-white"
          }`}
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
