"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Search } from "./components/Search";

export default function Home() {
  const receipe = [
    {
      id: 1,
      title: "roti",
      description: "roti",
    },
    {
      id: 2,
      title: "rice",
      description: "rice",
    },
  ];
  const [searchTxt, setSearchText] = useState("");

  const handleSearch = (value) => {
    setSearchText(value);
  };
  const filterReceipe =
    receipe &&
    receipe.filter((item) => {
      return item.title.toLowerCase() == searchTxt.toLowerCase();
    });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Search Text:{searchTxt}</div>
      <Search searchTxt={searchTxt} handleChange={handleSearch} />
      <div>
        {filterReceipe.length > 0 && (
          <div className="font-bold">
            Search Results:
            <br />
            {filterReceipe && filterReceipe.length > 0 ? (
              <div>
                {filterReceipe.map((item) => (
                  <div>{item.title}</div>
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
