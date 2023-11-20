import { useState, useEffect } from "react";
export const Search = ({ handleChange }) => {
  const [searchTxt, setSearchText] = useState("abc");
  const handleTxtSearch = (value) => {
    setSearchText(value);
    handleChange(value);
  };
  return (
    <div>
      <p>Search for recipes based on ingredients, cuisine, or dietary</p>
      <input
        type="text"
        placeholder="search"
        value={searchTxt}
        onChange={(e) => handleTxtSearch(e.target.value)}
        className="mt-3 p-5 w-full min-w-min  border-pink-100"
      />
      <div></div>
    </div>
  );
};
