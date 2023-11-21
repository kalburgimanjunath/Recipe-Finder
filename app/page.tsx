"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Search } from "./components/Search";
import { receipe } from "./data/receipe";
import Link from "next/link";
export default function Home() {
  const [searchTxt, setSearchText] = useState("pot");

  const handleSearch = (value) => {
    setSearchText(value);
  };
  const filterReceipe =
    receipe && receipe.filter((item) => item.name.includes(searchTxt));
  const filterIngreditents =
    receipe && receipe.filter((initem) => initem.name.includes(searchTxt));
  const Ingredients = ({ title, ingredients }) => {
    return (
      ingredients &&
      ingredients.map((item) => (
        <div className="bg-pink m-2 grid grid-cols-3 border-2 shadow-md p-2">
          <div>name : {item.name}</div>
          <div>quantity : {item.quantity}</div>
          <div>type : {item.type}</div>
        </div>
      ))
    );
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Search Text:{searchTxt}</div>
      <Search searchTxt={searchTxt} handleChange={handleSearch} />
      <div className="m-3 w-full shadow-lg border-1 p-5 bg-white z-10 justify-items-center">
        {filterReceipe.length > 0 && (
          <div>
            <div className="font-bold">Search Results:</div>
            <br />
            {filterReceipe && filterReceipe.length > 0 ? (
              <div>
                {filterReceipe.map((item) => (
                  <div>
                    <div>
                      <img src={item.imageURL} />
                      <Link
                        className="font-bold"
                        href={`/receipe/${encodeURIComponent(item.name)}`}
                      >
                        {item.name}
                      </Link>
                    </div>
                    <div className="font-bold uppercase">Ingredients</div>
                    <Ingredients ingredients={item.ingredients} />
                    <div className="font-bold uppercase">Steps</div>
                    <div>
                      <ul className="m-2 p-2 list-disc">
                        {item.steps &&
                          item.steps.map((stepitem) => {
                            return <li>{stepitem}</li>;
                          })}
                      </ul>
                    </div>
                  </div>
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
