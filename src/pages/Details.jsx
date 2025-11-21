import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { movies } from "../data/movies";
import star from '../../public/Star.png';
import backIcon from '../../public/back.png';

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) return <p>Movie not found</p>;

  const { title, year, cast, description, image, duration, rating, country, genre, releaseDate } = movie;

  const handleBack = () => {
    navigate(-1); 
  };


  return (
    <div className="flex bg-black py-8 px-20 gap-20">
      <div className="left w-120">
        <img src={image} alt={title} className="rounded-lg" />
      </div>
      <div className="right flex flex-col border border-white border-x-0 border-y-4 py-12 w-full gap-8">
        <h1 className="text-white text-4xl font-bold">{title}</h1>
        <div className="little-details flex gap-4 items-center">
          <div className="bg-red-500 text-white px-4 py-1 w-fit">HD</div>
          {rating && (
            <div className="rating flex gap-2 items-center">
              <p className="text-white/80">{rating}/10</p>
              <img src={star} alt="rating" width={30} height={30} />
            </div>
          )}
          {duration && <p className="text-white/80">{duration}</p>}
        </div>
        {description && (
          <p className="text-white">{description}</p>
        )}
        <div className="infos flex flex-col gap-2">
          {country && (
            <div className="country flex gap-2">
              <p className="text-white/80">Country:</p>
              <p className="text-white">{country}</p>
            </div>
          )}
          {genre && (
            <div className="genres flex gap-2">
              <p className="text-white/80">Genres:</p>
              <p className="text-white">{genre}</p>
            </div>
          )}
          {(releaseDate || year) && (
            <div className="Released flex gap-2">
              <p className="text-white/80">Released:</p>
              <p className="text-white">{releaseDate || year}</p>
            </div>
          )}
          {cast && (
            <div className="Casts flex gap-2">
              <p className="text-white/80">Casts:</p>
              <p className="text-white">{cast}</p>
            </div>
          )}
        </div>
        <button 
          onClick={handleBack}
          className="flex bg-red-500 px-4 py-2 font-medium text-white items-center gap-2 w-fit cursor-pointer hover:bg-red-600 border rounded transition-colors"
        >
          <img src={backIcon} alt="back icon" className="w-4 h-4" />
          Get Back
        </button>
      </div>
    </div>
  );
}