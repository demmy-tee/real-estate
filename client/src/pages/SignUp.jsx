import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='flex flex-col items-center justify-center p-12 h-screen mx-auto font-mono '>
      <h1 className='text-3xl font-bold text-slate-800'>Sign Up</h1>
      <p className='mb-6 text-slate-800'>Create an account here</p>
      <form className='flex flex-col gap-4 text-center p-6 bg-slate-800 w-lg sm:w-2/5 rounded-[20px]'>
        <input type="text" placeholder="Username" className='p-4 rounded' />
        <input type="email" placeholder="Email" className='p-4 rounded' />
        <input type="password" placeholder="Password" className='p-4 rounded' />
        <button type="submit" className='bg-soft text-white p-4 rounded-3xl mt-2 hover:opacity-70 disabled:opacity-60'>Sign Up</button>
        <h3 className='text-white border-double'>or</h3>
        <button type="submit" className='bg-white text-soft p-4 rounded-3xl hover:bg-soft hover:text-white'>Continue with Google</button>
      </form>
      <div>
        <p>Already have an account? <Link to="/sign-in" className='text-soft'>Log in</Link></p>
      </div>
    </div>
  )
}
