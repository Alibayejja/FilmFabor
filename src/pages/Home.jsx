import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import star from "../../public/Star.png";
import plus from "../../public/plus.png";
import play from "../../public/play.png";
import Cards from "../components/Cards";
import Poppup from "../components/Poppup";
import { movies } from "../data/movies";

export default function Home() {
  const [showPoppup, setShowPoppup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPoppup(true);
      return () => clearTimeout(timer);
    }, 5000);
  }, []);

  const skipPoppup = () => {
    setShowPoppup(false);
  };
  return (
    <>
      <div className="relative w-full h-full">
        <div className="main flex flex-col">
          <div className="Hero flex bg-[url(/public/HeroBg.jpeg)] w-full">
            <div className="Left-Content-Container flex flex-col  px-12 py-24 h-screen bg-black/80 gap-8 w-160">
              <div className="Header flex flex-col gap-2 w-120 ">
                <div className="Rating flex">
                  <img src={star} alt="" width={40} height={40} />
                  <img src={star} alt="" width={40} height={40} />
                  <img src={star} alt="" width={40} height={40} />
                  <img src={star} alt="" width={40} height={40} />
                  <img src={star} alt="" width={40} height={40} />
                </div>

                <h1 className="text-4xl font-bold text-white">
                  Spider-Man : Across the Spider-Verse
                </h1>
              </div>
              <p className="text-white">
                Traveling across the multiverse, Miles Morales meets a new team
                of Spider-People, made up of heroes from different dimensions.
                But when the heroes clash over how to deal with a new threat,
                Miles finds himself at a crossroads
              </p>
              <div className="genres-tags flex gap-4">
                <div className="bg-white rounded-2xl px-4 py-2 w-fit font-medium">
                  Epic
                </div>
                <div className="bg-white rounded-2xl px-4 py-2 w-fit font-medium">
                  Sci-Fi Epic
                </div>
                <div className="bg-white rounded-2xl px-4 py-2 w-fit font-medium">
                  Adventure
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex bg-red-500 px-4 py-2 font-medium text-white items-center gap-2 border">
                  <img src={play} alt="play icon" className="w-4 h-4" />
                  Watch Now
                </button>
                <button className="flex px-4 py-2 font-medium text-white justify-center items-center gap-2">
                  <img src={plus} alt="play icon" className="w-4 h-4" />
                  See Details
                </button>
              </div>
            </div>
            <div className="Right"></div>
          </div>
          <div className="flex flex-col bg-black gap-12 px-12 py-12 items-center">
            <h1 className="text-white text-4xl font-medium decoration-red-500 underline">
              Trending Now
            </h1>
            <div className="movies-grid grid grid-cols-4 gap-4">
              {movies.map((movie, index) => (
                <Cards
                  key={index}
                  title={movie.title}
                  image={movie.image}
                  year={movie.year}
                />
              ))}
            </div>
          </div>
        </div>
        {showPoppup && (
          <div className="absolute inset-0 flex py-20 justify-center bg-black/50">
            <Poppup skipPoppup={skipPoppup} />
          </div>
        )}
      </div>
    </>
  );
}
