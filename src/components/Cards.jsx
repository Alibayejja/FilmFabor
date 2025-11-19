import React from 'react'
import PlayIcon from '../../public/play.png'

export default function Cards() {
  return (
    <div className='flex flex-col h-fit rounded-lg'>
      {/* Image wrapper */}
      <div className='relative overflow-hidden rounded-lg group h-140'>
        {/* Image */}
        <img 
          className='transform transition-transform duration-300 ease-in-out group-hover:scale-110 w-full'
          src="/images/1.jpeg" 
          alt=""
        />

        {/* Black overlay */}
        <div className='absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>

        {/* Play icon */}
        <img 
          src={PlayIcon} 
          alt="Play" 
          className='absolute inset-0 m-auto w-16 h-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
        />
      </div>

      <h1 className='text-white font-bold mt-2'>Frankenstein</h1>
      <p className='text-white/80 font-medium'>2025</p>
    </div>
  )
}
