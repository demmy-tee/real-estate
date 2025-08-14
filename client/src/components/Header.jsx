import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center mx-auto">
      <Link to="/">
       <h1 className="text-sm: sm:text-2xl font-bold">Brian<span className='text-soft text-5xl'>Y</span></h1>
      </Link>
      <form className='flex' >
        <input type="text" placeholder="" className="p-2 rounded-l-md :focus:outline-none focus:ring-2 focus:ring-soft w-24 sm:w-64" />
        <button type="submit" className="bg-[#9CAFAA] text-white p-2 rounded-r-md hover:bg-slate-500">Search</button>
      </form>
      <ul className='flex space-x-4'>
      <Link to="/"><li className='hidden sm:inline hover:text-soft'>Home</li></Link>
        <Link to="/contact"><li className='hover:text-soft hidden sm:inline'>Contact</li></Link>
        <Link to="/sign-in"><li className='hover:text-soft  sm:inline'>Sign In</li></Link>
      </ul>
    </header>
  )
}
