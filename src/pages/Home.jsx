import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import star from "../../public/Star.png";
import plus from "../../public/plus.png";
import play from "../../public/play.png";
import Cards from "../components/Cards";
import Poppup from "../components/Poppup";
import { movies } from "../data/movies";

export default function Home() {
  const [showPoppup, setShowPoppup] = useState(false);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Featured movies for hero section (you can customize this selection)
  const featuredMovies = movies.slice(0, 5);
  const currentMovie = featuredMovies[currentMovieIndex];

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/details/${id}`, {});
  };

  // Popup timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPoppup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate hero section every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentMovieIndex(
          (prevIndex) => (prevIndex + 1) % featuredMovies.length
        );
        setIsTransitioning(false);
      }, 500); // Half second for fade out, then change content
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredMovies.length]);

  const skipPoppup = () => {
    setShowPoppup(false);
  };

  // Generate star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating / 2);
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <img
          key={index}
          src={star}
          alt="star"
          width={40}
          height={40}
          className={index < fullStars ? "opacity-100" : "opacity-30"}
        />
      ));
  };

  return (
    <>
      <div className="relative w-full h-full">
        <div className="main flex flex-col">
          <div
            className="Hero flex bg-cover bg-center w-full transition-all duration-1000"
            style={{ backgroundImage: `url(${currentMovie.cover})` }}
          >
            <div
              className={`Left-Content-Container flex flex-col px-12 py-24 h-screen bg-black/80 gap-8 w-160 transition-all duration-500 ${
                isTransitioning
                  ? "opacity-0 translate-x-[-20px]"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <div className="Header flex flex-col gap-2 w-120">
                <div className="Rating flex">
                  {renderStars(currentMovie.rating)}
                </div>

                <h1 className="text-4xl font-bold text-white">
                  {currentMovie.title}
                </h1>
              </div>
              <p className="text-white">{currentMovie.description}</p>
              <div className="genres-tags flex gap-4">
                {currentMovie.genre.split(", ").map((genre, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl px-4 py-2 w-fit font-medium"
                  >
                    {genre}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleClick(currentMovie.id)}
                  className="flex bg-red-500 px-4 py-2 font-medium text-white items-center gap-2 border hover:bg-red-600 transition-colors"
                >
                  <img src={play} alt="play icon" className="w-4 h-4" />
                  Watch Now
                </button>
                <button
                  onClick={() => handleClick(currentMovie.id)}
                  className="flex px-4 py-2 font-medium text-white justify-center items-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <img src={plus} alt="plus icon" className="w-4 h-4" />
                  See Details
                </button>
              </div>

              {/* Indicator dots */}
              <div className="flex gap-2 mt-4">
                {featuredMovies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setCurrentMovieIndex(index);
                        setIsTransitioning(false);
                      }, 500);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentMovieIndex
                        ? "bg-red-500 w-8"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="Right"></div>
          </div>
          <div className="flex flex-col bg-black gap-12 px-12 py-12 items-center">
            <h1 className="text-white text-4xl font-medium decoration-red-500 underline">
              Trending Now
            </h1>
            <div className="movies-grid grid grid-cols-4 gap-4">
              {movies.map((movie) => (
                <Cards
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  image={movie.image}
                  year={movie.year}
                  rating={movie.rating}
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
