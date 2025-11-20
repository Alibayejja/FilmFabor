import React from 'react'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <div className='bg-black flex px-8 py-2 text-white gap-176 font-medium items-center'>
      <Link 
      className='flex gap-0 items-center'
      to='/'>
      <img src='../../public/Nav-Logo.png' width={50} height={50} alt="" />
      <h1 className='text-3xl font-bold'>FilmFabor</h1>
      </Link>
    </div>
  )
}
