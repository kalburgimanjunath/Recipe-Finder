"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Search } from "./components/Search";
import { receipe } from "./data/receipe";
export default function Home() {
  const [searchTxt, setSearchText] = useState("pot");

  const handleSearch = (value) => {
    setSearchText(value);
  };
  const filterReceipe =
    (receipe && receipe.filter((item) => item.name.includes(searchTxt))) ||
    item.ingredients.filter((initem) => initem.name.includes(searchTxt));
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Search Text:{searchTxt}</div>
      <Search searchTxt={searchTxt} handleChange={handleSearch} />
      <div className=" w-full shadow-lg border-1 p-5 bg-white z-10 justify-items-center">
        {filterReceipe.length > 0 && (
          <div>
            <div className="font-bold">Search Results:</div>
            <br />
            {filterReceipe && filterReceipe.length > 0 ? (
              <div>
                {filterReceipe.map((item) => (
                  <div>{item.name}</div>
                ))}
              </div>
            ) : (
              "No Search Result"
            )}
          </div>
        )}
      </div>
    </main>
  );
}
