import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlayIcon from '../../public/play.png';

export default function Cards({ title, year, image, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div className='flex flex-col h-fit rounded-lg'>
      {/* Image wrapper with fixed aspect ratio */}
      <div className='relative overflow-hidden rounded-lg group aspect-[2/3]'>
        {/* Image */}
        <img 
          className='absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110'
          src={image} 
          alt={title}
        />

        {/* Black overlay */}
        <div className='absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>

        {/* Play button */}
        <button
          onClick={handleClick}
          className='absolute inset-0 m-auto w-16 h-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer'
          aria-label={`Play ${title}`}
        >
          <img 
            src={PlayIcon} 
            alt="Play" 
            className='w-full h-full'
          />
        </button>
      </div>

      <h1 className='text-white font-bold mt-2'>{title}</h1>
      <p className='text-white/80 font-medium'>{year}</p>
    </div>
  );
}