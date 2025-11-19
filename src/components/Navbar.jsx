import React from 'react'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <div className='bg-black flex px-8 py-2 text-white gap-176 font-medium items-center'>
      <Link to='/'><img src='../../public/Nav-Logo.png' width={50} height={50} lt="" /></Link>
      <Link 
       className='hover:text-red-400'
      to='/'>Home</Link>
    </div>
  )
}
